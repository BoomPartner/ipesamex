'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const ChatBot = dynamic(() => import('./ChatBot'), {
  ssr: false,
});

const DeferredChatBot = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let idleId;
    let timerId;

    const revealChat = () => setIsReady(true);
    const scheduleChat = () => {
      if ('requestIdleCallback' in window) {
        idleId = window.requestIdleCallback(revealChat, { timeout: 4000 });
      } else {
        timerId = window.setTimeout(revealChat, 1500);
      }
    };

    if (document.readyState === 'complete') {
      scheduleChat();
    } else {
      window.addEventListener('load', scheduleChat, { once: true });
    }

    return () => {
      window.removeEventListener('load', scheduleChat);
      if (idleId !== undefined) {
        window.cancelIdleCallback(idleId);
      }
      if (timerId !== undefined) {
        window.clearTimeout(timerId);
      }
    };
  }, []);

  return isReady ? <ChatBot /> : null;
};

export default DeferredChatBot;
