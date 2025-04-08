"use client";
import React, { useState, useRef } from 'react';

const Carrusel = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleClick = () => {
    if (isMuted && videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
    }
  };

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted={isMuted}
      onClick={handleClick}
      style={{ width: '100%', height: 'auto' }}
    >
      <source src="/promociones/copy_E3240593-C51A-4155-BD7E-5DFF0B7ED2AF.mp4" type="video/mp4" />
      Tu navegador no soporta la etiqueta de video.
    </video>
  );
};

export default Carrusel;
