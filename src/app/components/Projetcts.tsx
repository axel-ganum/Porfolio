import Image from 'next/image'; 
export default function Projects() {
  return (
    <section
      id="proyectos"
      className="py-20 px-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12 underline decoration-blue-400 decoration-4 underline-offset-4">
           Proyectos personales
       </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Proyecto 1 */}
          <div className="bg-gray-700 rounded-lg shadow-md p-6 text-left transform transition duration-500 hover:scale-105 hover:shadow-lg animate__animated animate__fadeInUp">
           <Image
              src="/images/consultoria.jpg"
              alt="Consultoría"
              width={500}  // Añade ancho
              height={300} // Añade alto
              className="mb-4 rounded-lg object-cover w-full h-56"
            />
            <h3 className="text-2xl font-semibold text-gray-100">Landing Consultoría</h3>
            <p className="text-gray-300 mb-4">
              Landing page profesional para una agencia de consultoría de negocios.
            </p>
            <a href="https://peaceful-cheesecake-c025cf.netlify.app"  target="_blank" className="text-blue-600 hover:underline">
              Ver proyecto
            </a>
          </div>

          {/* Proyecto 2 */}
          <div className="bg-gray-700 rounded-lg shadow-md p-6 text-left transform transition duration-500 hover:scale-105 hover:shadow-lg animate__animated animate__fadeInUp animate__delay-1s">
          <Image
              src="/images/restaurante.jpg"
              alt="Restaurante"
              width={500}
              height={300}
              className="mb-4 rounded-lg object-cover w-full h-56"
            />
            <p className="text-gray-300 mb-4">
              Página moderna y visual para un restaurante local.
            </p>
            <a href="https://delicate-phoenix-acd448.netlify.app" target="_blank" className="text-blue-600 hover:underline">
              Ver proyecto
            </a>
          </div>

          {/* Proyecto 3 */}
          <div className="bg-gray-700 rounded-lg shadow-md p-6 text-left transform transition duration-500 hover:scale-105 hover:shadow-lg animate__animated animate__fadeInUp animate__delay-2s">
          <Image
              src="/images/cafeteria.jpg"
              alt="Cafetería"
              width={500}
              height={300}
              className="mb-4 rounded-lg object-cover w-full h-56"
            />
            <h3 className="text-2xl font-semibold text-gray-100">Landing Cafetería</h3>
            <p className="text-gray-300 mb-4">
              Página elegante para una cafetería especializada con enfoque visual.
            </p>
            <a href="https://frabjous-fox-c94391.netlify.app" target="_blank" className="text-blue-600 hover:underline">
              Ver proyecto
            </a>
          </div>

          {/* Proyecto 4 */}
          <div className="bg-gray-700 rounded-lg shadow-md p-6 text-left transform transition duration-500 hover:scale-105 hover:shadow-lg animate__animated animate__fadeInUp animate__delay-3s">
          <Image
              src="/images/tienda.jpg"
              alt="Tienda de Ropa"
              width={500}
              height={300}
              className="mb-4 rounded-lg object-cover w-full h-56"
            />
            <h3 className="text-2xl font-semibold text-gray-100">Landing Tienda de Ropa</h3>
            <p className="text-gray-300 mb-4">
              Tienda urbana con diseño moderno y responsive para destacar productos.
            </p>
            <a href="https://coruscating-florentine-f28170.netlify.app" target="_blank" className="text-blue-600 hover:underline">
              Ver proyecto
            </a>
          </div>
        </div>
      </div> 
    </section>
  );
}


  