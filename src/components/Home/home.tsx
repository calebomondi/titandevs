import React, { useState, useEffect } from 'react';

interface ImageUrls {
  squig: string;
  banner: string;
  developers: string;
}

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function Home(): JSX.Element {

  const IMAGES: ImageUrls = {
    squig: 'https://github.com/user-attachments/assets/41862270-817f-4a11-9e52-65a0194f0544',
    banner: 'https://github.com/user-attachments/assets/916a4854-e5fd-420b-82d6-849a18ef9701',
    developers: 'https://github.com/user-attachments/assets/f7071a03-a2e1-402d-b458-35d02e283596'
  };

  useEffect(() => {
    const imagePromises: Promise<void>[] = Object.values(IMAGES).map(src => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = (error: string | Event) => reject(error);
      });
    });

    Promise.all(imagePromises)
      .then()
      .catch((err: Error) => console.error('Error preloading images:', err));
  }, []);

  const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, className = '', style }) => {
    const [loaded, setLoaded] = useState<boolean>(false);

    return (
      <img
        src={src}
        alt={alt}
        className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        style={style}
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
    );
  };

  return (
    <div className="w-full flex flex-col md:flex-row md:h-screen h-auto" id="Home">
      <div 
        className="w-full h-screen md:w-1/2 p-2 md:h-auto flex justify-center items-center flex-col bg-cover bg-center relative"
      >
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src={IMAGES.squig}
            alt="Background pattern"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 flex justify-center text-white items-center flex-col bg-cover bg-center p-2 md:w-1/2 h-2/3 md:h-1/2 w-full">
          <div className="absolute inset-0 z-0">
            <OptimizedImage
              src={IMAGES.banner}
              alt="Banner background"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h2 className="relative z-20 text-center font-mono text-6xl font-extrabold">
            TitanDevs
          </h2>
          <h3 className="relative z-20 text-center font-sans text-2xl font-bold italic">
            If you can think it, we can build it.
          </h3>
        </div>
      </div>

      <div className="w-full md:w-1/2 p-2 flex justify-center items-center h-screen relative">
        <OptimizedImage
          src={IMAGES.developers}
          alt="Developers In The Process"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}