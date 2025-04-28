import { Code, Layout, Rocket } from "lucide-react";

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 underline decoration-blue-400 decoration-4 underline-offset-4">
          Servicios
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-700 rounded-xl hover:shadow-xl transition duration-300 shadow-lg">
            <Layout className="mx-auto mb-4 h-10 w-10 text-blue-300" />
            <h3 className="text-xl font-semibold mb-2">Landing Pages</h3>
            <p className="text-gray-300">
              Diseño y desarrollo de páginas de aterrizaje modernas, rápidas y optimizadas para convertir.
            </p>
          </div>

          <div className="p-6 bg-gray-700 rounded-xl hover:shadow-xl transition duration-300 shadow-lg">
            <Code className="mx-auto mb-4 h-10 w-10 text-blue-300" />
            <h3 className="text-xl font-semibold mb-2">Aplicaciones Web</h3>
            <p className="text-gray-300">
              Desarrollo fullstack con React, Next.js, Node, NestJS y bases de datos SQL/NoSQL.
            </p>
          </div>

          <div className="p-6 bg-gray-700 rounded-xl hover:shadow-xl transition duration-300 shadow-lg">
            <Rocket className="mx-auto mb-4 h-10 w-10 text-blue-300" />
            <h3 className="text-xl font-semibold mb-2">Optimización & SEO</h3>
            <p className="text-gray-300">
              Mejora de rendimiento, accesibilidad y posicionamiento en buscadores para tu sitio web.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

