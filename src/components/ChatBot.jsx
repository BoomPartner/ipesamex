import React, { useEffect, useState, useRef } from 'react';
import { Button, Typography, Tooltip } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPaperPlane, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import Whatsapp from './Whats';

const ChatBot = () => {
    const [isChatboxOpen, setIsChatboxOpen] = useState(false);
    const [userMessages, setUserMessages] = useState([]);
    const userInputRef = useRef(null);
    const chatboxRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [mensajeInicial, setMensajeInicial] = useState(null);

    const toggleChatbox = () => {
        setIsChatboxOpen(!isChatboxOpen);
        setUserMessages([]);
        setIsLoading(true);
        setTimeout(() => {
            setMensajeInicial("Hola!, soy el asistente virtual de IPESA, estoy aquí para resolver cualquier duda que tengas, no dudes en preguntarme.");
            setIsLoading(false);
        }, 3000);
    };

    const sendMessage = () => {
        const userMessage = userInputRef.current.value;
        if (userMessage.trim() !== "") {
            setUserMessages(prevMessages => [...prevMessages, { type: 'user', text: userMessage }]);
            respondToUser(userMessage);
            userInputRef.current.value = "";
        }
    };

    const handleKeyUp = (event) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    };

    const respondToUser = (userMessage) => {
        setIsLoading(true);
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY_CODE}`,
            },
            body: JSON.stringify({
                stream: false,
                format: "json",
                agentId: process.env.NEXT_PUBLIC_AGENT_ID,
                messages: [{ role: 'user', content: userMessage }],
            }),
        };

        fetch('https://api.codegpt.co/api/v1/chat/completions', requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('No hubo respuesta del server');
                }
                return response.json();
            })
            .then(data => {
                if (data.choices && data.choices.length > 0) {
                    const respuestaChat = data.choices[0].message.content;
                    simulateTyping(respuestaChat);
                } else {
                    console.log('No hay respuesta del asistente virtual o choices está vacío');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        if (chatboxRef.current) {
            chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
        }
    }, [userMessages]);

    const simulateTyping = (text) => {
        let index = 0;
        let currentText = '';

        const type = () => {
            if (index < text.length) {
                currentText += text.charAt(index);
                setUserMessages(prevMessages => {
                    const updatedMessages = [...prevMessages];
                    const lastMessage = updatedMessages[updatedMessages.length - 1];
                    if (lastMessage && lastMessage.type === 'bot') {
                        lastMessage.text = currentText;
                        updatedMessages[updatedMessages.length - 1] = lastMessage;
                    } else {
                        updatedMessages.push({ type: 'bot', text: currentText });
                    }
                    return updatedMessages;
                });
                index++;
                setTimeout(type, 50);
            }
        };

        setUserMessages(prevMessages => [...prevMessages, { type: 'bot', text: '' }]);
        type();
    };

    return (
        <div style={{ zIndex: 2147483647 }}>
            <div className="fixed bottom-0 right-2 lg:right-2 mb-2 z-50">
                <Whatsapp />
                <div onClick={toggleChatbox} className="cursor-pointer text-white p-3 transition duration-300 flex items-center justify-center zoom-on redondo bg-[#dc2a25]">
                    <Tooltip placement="top-start" className="border border-blue-gray-50 bg-white shadow-xl shadow-black/10" content={
                        <Typography as="p" variant="small" color="gray" className="uppercase">Chatea con nuestro asistente</Typography>
                    }>
                        <FontAwesomeIcon icon={faCommentDots} size="lg" color="white" />
                    </Tooltip>
                </div>
            </div>
            {isChatboxOpen && (
                <div className="fixed bottom-4 right-0 md:right-2 w-96 posicionar">
                    <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
                        <div className="p-4 border-b bg-[#e51e25] text-white rounded-t-lg flex justify-between items-center">
                            <div className="w-full">
                                <Typography as="h4" variant="h4">Asistente Virtual</Typography>
                            </div>
                            <Button className="bg-[]" onClick={toggleChatbox}>
                                <FontAwesomeIcon icon={faXmark} size="xl" />
                            </Button>
                        </div>
                        <div ref={chatboxRef} className="p-4 h-80 overflow-y-auto">
                            {mensajeInicial && (
                                <div className="mb-2">
                                    <p className="rounded-lg py-2 px-4 inline-block bg-gray-200 text-gray-700">
                                        {mensajeInicial}
                                    </p>
                                </div>
                            )}
                            {userMessages.map((message, index) => (
                                <div key={index} className={`w-full p-0 mb-2 ${message.type === 'user' ? 'text-right' : ''}`}>
                                    <pre className={`rounded-lg py-2 px-4 pre-class ${message.type === 'user' ? 'bg-[#e51e25] text-white' : 'bg-gray-200 text-gray-700'}`}>
                                        {message.text}
                                    </pre>
                                </div>
                            ))}
                        </div>
                        {isLoading && (
                            <div className="typing-indicator mb-10">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        )}
                        <div className="p-2 border-t flex">
                            <input ref={userInputRef} type="text" placeholder="Escribe una pregunta" className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#dc2a25]" onKeyUp={handleKeyUp} />
                            <div onClick={sendMessage} className="bg-[#e51e25] cursor-pointer w-[15%] flex items-center justify-center text-white rounded-r-md hover:bg-opacity-50 hover:bg-black transition duration-300">
                                <FontAwesomeIcon icon={faPaperPlane} size="xl" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatBot;
