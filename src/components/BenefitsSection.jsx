import React from 'react';

const BenefitsSection = () => {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">¿Por qué aprender con Teknea?</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div>
          <h3 className="text-xl font-semibold mb-2">Metodología Práctica</h3>
          <p>Aprende haciendo, con proyectos reales y retroalimentación constante.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Mentores Expertos</h3>
          <p>Profesionales activos que comparten su experiencia del mundo real.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Comunidad Activa</h3>
          <p>Aprende en grupo, pregunta, colabora y crece con otros.</p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;