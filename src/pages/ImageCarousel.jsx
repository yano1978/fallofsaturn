import { useState, useEffect } from 'react';

const ImageCarousel = () => {
  // Sample image data - replace with your own images
  const images = [
    {
      src: '/public/static/images/fos_1.jpg',
      alt: 'Fos 1',
      caption: 'Fos 1',
    },
    {
      src: '/public/static/images/fos_2.jpg',
      alt: 'Fos 2',
      caption: 'Fos 2',
    },
    {
      src: '/public/static/images/fos_3.jpg',
      alt: 'Fos 3',
      caption: 'Fos 3',
    },
    {
      src: '/public/static/images/fos_4.jpg',
      alt: 'Fos 4',
      caption: 'Fos 4',
    },
    {
      src: '/public/static/images/fos_5.jpg',
      alt: 'Fos 5',
      caption: 'Fos 5',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle automatic slideshow
  useEffect(() => {
    if (!isLightboxOpen) {
      const interval = setInterval(() => {
        if (!isTransitioning) {
          goToNext();
        }
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isLightboxOpen, isTransitioning]);

  const goToPrevious = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      {/* Main Carousel */}
      <div className="relative h-96 overflow-hidden rounded-lg">
        <div
          className="flex h-full transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="h-full min-w-full flex-shrink-0">
              <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
                <p className="text-lg">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-white bg-opacity-50 p-2 text-black hover:bg-opacity-75 focus:outline-none"
          aria-label="Previous image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-white bg-opacity-50 p-2 text-black hover:bg-opacity-75 focus:outline-none"
          aria-label="Next image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Fullscreen Button */}
        <button
          onClick={openLightbox}
          className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white  p-2 text-black hover:bg-opacity-75 focus:outline-none"
          aria-label="Open lightbox"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z"
            />
          </svg>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="mt-4 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full focus:outline-none ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <button
            onClick={closeLightbox}
            className="hover:bg-gray-800 absolute right-4 top-24 flex h-8 w-8 items-center justify-center rounded-full bg-white p-2 text-black focus:outline-none"
            aria-label="Close lightbox"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={goToPrevious}
            className="hover:bg-gray-800 absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 text-black focus:outline-none"
            aria-label="Previous image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="max-w-screen max-h-screen p-4">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="max-h-[90vh] max-w-full object-contain"
            />
            <div className="mt-4 text-center text-white">
              <p className="text-xl">{images[currentIndex].caption}</p>
              <p className="mt-2 text-sm">
                {currentIndex + 1} / {images.length}
              </p>
            </div>
          </div>

          <button
            onClick={goToNext}
            className="hover:bg-gray-800 absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 text-black focus:outline-none"
            aria-label="Next image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
