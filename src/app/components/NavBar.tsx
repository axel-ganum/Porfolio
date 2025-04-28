"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white z-50 shadow-md backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Axel Dev</h1>

        <button onClick={toggleMenu} className="lg:hidden focus:outline-none">
          {isOpen ? (
            <span className="text-3xl">&times;</span>
          ) : (
            <span className="text-3xl">&#9776;</span>
          )}
        </button>

        <ul
          className={`${
            isOpen ? "flex flex-col" : "hidden"
          } lg:flex gap-8 text-sm font-medium absolute lg:static bg-black/80 lg:bg-transparent w-full left-0 top-full lg:w-auto text-center transition-all duration-300 ease-in-out`}
        >
          <li>
            <a href="#hero" className="block py-2 hover:text-blue-400 transition-colors duration-300">Inicio</a>
          </li>
          <li>
            <a href="#about" className="block py-2 hover:text-blue-400 transition-colors duration-300">Sobre mí</a>
          </li>
          <li>
            <a href="#proyectos" className="block py-2 hover:text-blue-400 transition-colors duration-300">Proyectos</a>
          </li>
          <li>
            <a href="#servicios" className="block py-2 hover:text-blue-400 transition-colors duration-300">Servicios</a>
          </li>
          <li>
            <a href="#contacto" className="block py-2 hover:text-blue-400 transition-colors duration-300">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
