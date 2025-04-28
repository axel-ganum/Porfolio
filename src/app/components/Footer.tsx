export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Información del portafolio */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-300 mb-2">Axel Ganum</h3>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Desarrollador web freelance especializado en landing pages modernas con Next.js y Tailwind CSS.
          </p>
        </div>

        {/* Enlaces importantes */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-8 text-sm font-medium">
          <a href="#about" className="hover:text-gray-400 transition-colors duration-200">Sobre mí</a>
          <a href="#proyectos" className="hover:text-gray-400 transition-colors duration-200">Proyectos</a>
          <a href="#servicios" className="hover:text-gray-400 transition-colors duration-200">Servicios</a>
          <a href="#contacto" className="hover:text-gray-400 transition-colors duration-200">Contacto</a>
        </div>

        {/* Redes sociales */}
        <div className="flex justify-center gap-8 mb-8">
          <a href="https://www.linkedin.com/in/tu-linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8c0 4-3 7-7 7s-7-3-7-7 3-7 7-7 7 3 7 7zm-7 1c.736 0 1.45.262 2 .686V10h-1v2h2V7h-2v2h-1c-.567 0-1.093.233-1.457.623A5.024 5.024 0 009 9zm7 5c0-1.1-.9-2-2-2h-1v4h1c1.1 0 2-.9 2-2zm0 0H9" />
            </svg>
          </a>
          <a href="https://github.com/axel-ganum" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm-1 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm2-11h-4v2h4v-2zm0 4h-4v6h-2v-6h-3v-2h5v-2c0-2.247 1.75-4 4-4s4 1.753 4 4v2h-2v2z" />
            </svg>
          </a>
        </div>
        <p className="text-gray-400 text-xs sm:text-sm">
     © Axel Ganum — Creando experiencias digitales que destacan.
      </p>

      </div>
    </footer>
  );
}

  