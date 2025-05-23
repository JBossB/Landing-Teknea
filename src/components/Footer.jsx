import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-6 text-center">
      <p>Teknea &copy; 2025. Todos los derechos reservados.</p>
      <div className="mt-2 space-x-4">
        <a href="#" className="hover:text-white">Sobre nosotros</a>
        <a href="#" className="hover:text-white">Contacto</a>
        <a href="#" className="hover:text-white">Blog</a>
      </div>
    </footer>
  );
};

export default Footer;