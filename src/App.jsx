import React from 'react';
import BenefitsSection from './components/BenefitsSection';
import CoursesSection from './components/CoursesSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-white text-gray-800">
      <header className="bg-blue-50 min-h-screen flex flex-col justify-center items-center text-center px-6 relative">
        <div className="w-full max-w-5xl overflow-hidden rounded-xl shadow-lg">
          <img src="/path/to/your/image.jpg" alt="Slider Teknea" className="w-full h-auto object-cover" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center px-6 bg-blue-900 bg-opacity-40">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Aprende las habilidades del futuro, hoy</h1>
          <p className="text-lg md:text-xl text-white mb-6 max-w-2xl">Cursos online en tecnología, programación e innovación, para avanzar desde cero hasta dominar tu carrera digital.</p>
          <div className="flex gap-4">
            <a href="#cursos" className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">Explora Cursos</a>
            <a href="#registro" className="bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition">Empezar Gratis</a>
          </div>
        </div>
      </header>
      <BenefitsSection />
      <CoursesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default App;