import { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';

const images = [
  'DSC02135','DSC02152','DSC02153','DSC02155','DSC02158','DSC02160','DSC02161',
  'DSC02163','DSC02164','DSC02171','DSC02173','DSC02180','DSC02187','DSC02193',
  'DSC02202','DSC02206','DSC02210','DSC02218','DSC02220','DSC02221','DSC02222',
  'DSC02227','DSC02232','DSC02234','DSC02246','DSC02248','DSC02253','DSC02259',
  'DSC02262','DSC02264','DSC02271','DSC02277','DSC02280','DSC02281','DSC02285',
  'DSC02287','DSC02301','DSC02303','DSC02309','DSC02314','DSC02359','DSC02364',
  'DSC02369','DSC02382','DSC02384','DSC02388','DSC02389','DSC02394','DSC02401',
  'DSC02403','DSC02420','DSC02425','DSC02428','DSC02429','DSC02436','DSC02440',
  'DSC02455','DSC02456','DSC02461','DSC02462','DSC02464','DSC02466','DSC02467',
  'DSC02468','DSC02470','DSC02471','DSC02474','DSC02475','DSC02481','DSC02482',
  'DSC02483','DSC02484','DSC02488','DSC02490',
].map((name) => `/static/images/carousel/optimised/${name}.webp`);

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef(null);

  const prev = useCallback(() => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1)), []);
  const next = useCallback(() => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1)), []);

  // Auto-advance
  useEffect(() => {
    if (lightbox || paused) return;
    const t = setTimeout(next, 5000);
    return () => clearTimeout(t);
  }, [current, lightbox, paused, next]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape' && lightbox) setLightbox(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, prev, next]);

  // Lock scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const delta = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
    touchStart.current = null;
  };

  return (
    <>
      {/* Carousel */}
      <div
        id="gallery"
        className="flex flex-col items-center justify-center py-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <h2 className="my-5 font-orbitron text-[46px] font-bold">GALLERY</h2>

        <div className="relative w-full max-w-4xl px-4">
          {/* Track */}
          <div
            className="overflow-hidden rounded-lg"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {images.map((src, i) => (
                <div key={i} className="relative min-w-full">
                  <img
                    src={src}
                    alt={`Fall of Saturn live ${i + 1}`}
                    className="h-[28rem] w-full cursor-pointer object-cover md:h-[36rem]"
                    loading={i < 3 ? 'eager' : 'lazy'}
                    onClick={() => setLightbox(true)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Prev button */}
          <button
            onClick={prev}
            className="absolute left-6 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/75"
            aria-label="Previous"
          >
            <ChevronLeft />
          </button>

          {/* Next button */}
          <button
            onClick={next}
            className="absolute right-6 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/75"
            aria-label="Next"
          >
            <ChevronRight />
          </button>

          {/* Expand button */}
          <button
            onClick={() => setLightbox(true)}
            className="absolute right-8 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/75"
            aria-label="Fullscreen"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 right-8 rounded-full bg-black/50 px-3 py-1 text-xs text-white backdrop-blur-sm">
            {current + 1} / {images.length}
          </div>

          {/* Progress bar */}
          <div className="mt-3 h-0.5 w-full overflow-hidden rounded-full bg-white/20">
            <div
              className="h-full rounded-full bg-white transition-all duration-500 ease-in-out"
              style={{ width: `${((current + 1) / images.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Lightbox — rendered via portal at body level to escape main's stacking context */}
      {lightbox && createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && setLightbox(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <img
            src={images[current]}
            alt={`Fall of Saturn live ${current + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />

          {/* Close */}
          <button
            onClick={() => setLightbox(false)}
            className="absolute right-4 top-8 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/80"
            aria-label="Close"
          >
            <CloseIcon />
            <span>Close</span>
          </button>

          {/* Prev */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
            aria-label="Previous"
          >
            <ChevronLeft />
          </button>

          {/* Next */}
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
            aria-label="Next"
          >
            <ChevronRight />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white backdrop-blur-sm">
            {current + 1} / {images.length}
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default ImageCarousel;
