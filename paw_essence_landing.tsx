import React, { useEffect, useState } from 'react';

export default function PawEssenceLanding() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8 overflow-hidden">
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;1,400&display=swap" rel="stylesheet" />
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Title */}
          <div className="space-y-4">
            <h1 
              className={`text-6xl md:text-7xl font-light tracking-tight transition-all duration-1000 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
              }`}
              style={{ fontFamily: 'Raleway, sans-serif', transitionDelay: '200ms' }}
            >
              CATÁLOGO DE<br />RETRATOS
            </h1>
          </div>

          {/* Button */}
          <div
            className={`transition-all duration-1000 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <button className="group relative bg-black text-white px-12 py-5 rounded-full text-lg font-light tracking-wide overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl" style={{ fontFamily: 'Raleway, sans-serif' }}>
              <span className="relative z-10">PAW ESSENCE</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>

          {/* Secondary Text */}
          <div
            className={`inline-block transition-all duration-1000 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="bg-black text-white px-8 py-3 text-sm italic font-light tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
              VISUALIZA TODAS LAS OPCIONES
            </div>
          </div>

          {/* Quote */}
          <div
            className={`transition-all duration-1000 ${
              loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <p className="text-gray-600 italic font-light text-lg leading-relaxed max-w-md" style={{ fontFamily: 'Playfair Display, serif' }}>
              La profundidad de un ser que ama<br />sin condiciones.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div
          className={`relative transition-all duration-1500 ${
            loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <div className="relative group">
            {/* Frame Shadow - más pronunciada como en la imagen */}
            <div className="absolute inset-0 bg-black/30 blur-xl transform translate-x-6 translate-y-6 transition-all duration-700"></div>
            
            {/* Main Frame */}
            <div className="relative bg-white p-6 shadow-2xl transition-all duration-700 group-hover:shadow-3xl group-hover:-translate-y-2">
              {/* Inner Border */}
              <div className="border-2 border-gray-200 p-4">
                <img
                  src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&q=80"
                  alt="Retrato elegante de gato con sombrero y monóculo"
                  className="w-full h-auto transition-all duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Decorative Corner Elements */}
              <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-amber-700/30 transition-all duration-500 group-hover:w-12 group-hover:h-12"></div>
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-amber-700/30 transition-all duration-500 group-hover:w-12 group-hover:h-12"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Background Animation */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div 
          className={`absolute top-0 right-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-0 transition-opacity duration-2000 ${
            loaded ? 'opacity-30' : 'opacity-0'
          }`}
          style={{ transitionDelay: '1000ms' }}
        ></div>
        <div 
          className={`absolute bottom-0 left-0 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-0 transition-opacity duration-2000 ${
            loaded ? 'opacity-40' : 'opacity-0'
          }`}
          style={{ transitionDelay: '1200ms' }}
        ></div>
      </div>
    </div>
  );
}