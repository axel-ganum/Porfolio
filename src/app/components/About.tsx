import 'animate.css';

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white px-6 pt-24 pb-12 animate__animated animate__fadeInUp animate__delay-1s overflow-hidden"
    >
      {/* Divider superior */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-16"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0V46.29c47.56,22,106.69,29,158,17.18C230,50,284,17,339.82,6.57c54.15-10.24,108.31,6.44,162,24.6C585,51,639,69,693,61.92c53.86-7.05,107.71-38.7,161.53-44.39,53.09-5.6,106.18,15.51,159.27,26.14V0Z"
            opacity=".25"
            fill="#0f172a"
          ></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-10 items-center">
        {/* Texto */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 underline decoration-blue-400 decoration-4 underline-offset-4">
            Un poco sobre mí
          </h2>

          <div className="space-y-4 text-lg leading-relaxed text-gray-300">
            <p>
              ¡Hola! Soy <span className="text-blue-300 font-semibold">Axel</span>, un apasionado del desarrollo web con enfoque en
              <span className="text-blue-300 font-semibold"> diseño moderno</span> y
              <span className="text-blue-300 font-semibold"> alto rendimiento</span>.
            </p>
            <p className="text-gray-400">
              Me especializo en <span className="font-semibold text-blue-300">landing pages</span> usando
              <span className="font-semibold text-blue-300"> Next.js</span> y
              <span className="font-semibold text-blue-300"> Tailwind CSS</span>.
            </p>
            <p className="text-gray-400">
              También creo <span className="font-semibold text-blue-300">aplicaciones web fullstack</span> escalables.
            </p>
            <p className="text-gray-400">
              Me encantan los desafíos donde pueda aportar soluciones modernas y efectivas 🚀.
            </p>
          </div>
        </div>

        {/* Tarjetas de habilidades */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            { title: 'Next.js', color: 'bg-blue-500' },
            { title: 'Tailwind CSS', color: 'bg-cyan-500' },
            { title: 'React', color: 'bg-indigo-500' },
            { title: 'TypeScript', color: 'bg-sky-600' },
            { title: 'Node.js', color: 'bg-green-600' },
            { title: 'Git', color: 'bg-orange-500' },
          ].map((skill) => (
            <div
              key={skill.title}
              className={`rounded-xl p-4 text-white text-center ${skill.color} shadow-lg shadow-black/20`}
            >
              <h3 className="text-lg font-bold">{skill.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}






