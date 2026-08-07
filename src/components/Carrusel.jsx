'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const AUTOPLAY_DELAY = 4000;
const SWIPE_THRESHOLD = 50;

const slides = [
  {
    src: '/home/slider-principal/banner_03062026.jpg',
    alt: 'Nueva línea Vulcan para mantenimiento industrial ligero: protección, resistencia y desempeño para cada proyecto.',
    width: 3840,
    height: 1340,
  },
  {
    src: '/home/slider-principal/banner_20260410.jpg',
    alt: 'Vinipesa edición especial Fiesta del Fútbol: cubeta de 23 litros al precio de 19 litros, con 20% más producto.',
    width: 4012,
    height: 1402,
  },
  {
    src: '/home/slider-principal/banner_20260410_2.jpg',
    alt: 'Fiesta del Fútbol IPESA con playera, cubeta Vinipesa edición especial y balón promocional.',
    width: 4012,
    height: 1402,
  },
  {
    src: '/home/slider-principal/banner_20260410_3.jpg',
    alt: 'Promoción Fiesta del Fútbol: compra Vinipesa edición especial y recibe una playera, un balón o ambos según el monto de compra.',
    width: 4012,
    height: 1402,
  },
  {
    src: '/home/slider-principal/banner_20260410_4.jpg',
    alt: 'Promoción Caída del Cielo: 20 por ciento de descuento en impermeabilizantes IPESA participantes.',
    width: 4012,
    height: 1402,
  },
  {
    src: '/home/slider-principal/banner_01_2026.jpg',
    alt: 'Ruta de capacitación del color IPESA: capacitación sin costo con especialistas y consulta de fechas mediante código QR.',
    width: 2520,
    height: 707,
  },
  {
    src: '/home/slider-principal/banner_04.jpg',
    alt: 'Línea Century Maderas de IPESA: selladores, solventes, fondos, lacas y barnices para madera.',
    width: 4012,
    height: 1402,
  },
  {
    src: '/home/slider-principal/banner_05.jpg',
    alt: 'Nuevos colores metálicos oro, plata y cobre del esmalte modificado Tropimar de IPESA.',
    width: 4012,
    height: 1402,
  },
  {
    src: '/home/slider-principal/banner_06.jpg',
    alt: 'Vulcan 5011, nuevo primario anticorrosivo industrial con adherencia en lámina galvanizada, protección anticorrosiva y secado rápido.',
    width: 4012,
    height: 1402,
  },
  {
    src: '/home/slider-principal/banner_01.jpg',
    alt: 'Línea de pulimentos y productos para repintado automotriz Menzerna disponible en IPESA Pinturas.',
    width: 4012,
    height: 1402,
  },
];

const Carrusel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);
  const [announcement, setAnnouncement] = useState('');
  const touchStartX = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener('change', updateMotionPreference);

    return () => mediaQuery.removeEventListener('change', updateMotionPreference);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) {
      return undefined;
    }

    const autoplayTimer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(autoplayTimer);
  }, [isPaused, prefersReducedMotion]);

  const showSlide = (nextIndex) => {
    setActiveIndex(nextIndex);
    setAnnouncement(`Promoción ${nextIndex + 1} de ${slides.length}: ${slides[nextIndex].alt}`);
  };

  const showPreviousSlide = () => {
    showSlide((activeIndex - 1 + slides.length) % slides.length);
  };

  const showNextSlide = () => {
    showSlide((activeIndex + 1) % slides.length);
  };

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsPaused(false);
    }
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) {
      return;
    }

    const distance = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < SWIPE_THRESHOLD) {
      return;
    }

    if (distance > 0) {
      showPreviousSlide();
    } else {
      showNextSlide();
    }
  };

  return (
    <div
      className={`carrusel-principal${prefersReducedMotion ? ' carrusel-principal--reduce-motion' : ''}`}
      role="region"
      aria-roledescription="carrusel"
      aria-label="Promociones y novedades de IPESA"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={handleBlur}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="carrusel-principal__viewport">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={slide.src}
              className={`carrusel-principal__slide${isActive ? ' carrusel-principal__slide--active' : ''}`}
              role="group"
              aria-roledescription="diapositiva"
              aria-label={`${index + 1} de ${slides.length}`}
              aria-hidden={!isActive}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                width={slide.width}
                height={slide.height}
                className="carrusel-principal__imagen"
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          );
        })}
      </div>

      <button
        type="button"
        className="carrusel-principal__control carrusel-principal__control--prev"
        aria-label="Mostrar la promoción anterior"
        onClick={showPreviousSlide}
      >
        <span aria-hidden="true">‹</span>
      </button>
      <button
        type="button"
        className="carrusel-principal__control carrusel-principal__control--next"
        aria-label="Mostrar la siguiente promoción"
        onClick={showNextSlide}
      >
        <span aria-hidden="true">›</span>
      </button>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </p>
    </div>
  );
};

export default Carrusel;
