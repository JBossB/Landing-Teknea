import React from 'react';

const testimonials = [
  {
    quote: "Gracias a Teknea conseguí mi primer trabajo remoto como programador. ¡Más que recomendado!",
    name: "Camila G.",
    location: "Chile"
  },
  {
    quote: "Los cursos son muy completos y los mentores siempre están dispuestos a ayudar.",
    name: "Juan P.",
    location: "Argentina"
  },
  {
    quote: "Aprendí a programar desde cero y ahora estoy trabajando en un proyecto real.",
    name: "Lucía M.",
    location: "España"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Lo que dicen nuestros estudiantes</h2>
      <div className="max-w-3xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="mb-8">
            <blockquote className="italic text-gray-700">"{testimonial.quote}"</blockquote>
            <p className="mt-4 font-semibold text-blue-900">{testimonial.name}, {testimonial.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;