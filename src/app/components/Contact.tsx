export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white px-6"
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 underline decoration-blue-400 decoration-4 underline-offset-4">
          Contacto
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          ¿Listo para comenzar tu próximo proyecto? Estoy aquí para ayudarte a crear una presencia online que realmente destaque.
        </p>
        <a
          href="https://mail.google.com/mail/?view=cm&to=axelpiky10@gmail.com"
          target="_blank"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Enviar mensaje
        </a>

        <p className="mt-8 text-gray-400">
          También puedes ver más de mi trabajo en{" "}
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </a>.
        </p>
      </div>
    </section>
  );
}

