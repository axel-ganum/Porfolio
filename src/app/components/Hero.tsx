import 'animate.css';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center px-6 py-16 md:py-0"
    >
      <div className="animate__animated animate__fadeInUp animate__delay-1s max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          ¡Hola! Soy <span className="text-blue-300">Axel Ganum</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6">
          Desarrollador web freelance creando{" "}
          <span className="font-semibold text-blue-300">landing pages</span> que convierten y{" "}
          <span className="font-semibold text-blue-300">aplicaciones fullstack</span> con tecnologías modernas como Next.js y React.
        </p>

        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8">
          Combinando diseño limpio, velocidad y funcionalidad para ayudarte a destacar en la web.
        </p>

        <a
          href="#proyectos"
          className="inline-block px-8 py-3 bg-blue-300 text-white rounded-full hover:bg-blue-400 transition duration-300 text-base sm:text-lg font-medium"
        >
          Ver proyectos
        </a>
      </div>
    </section>
  );
}



  