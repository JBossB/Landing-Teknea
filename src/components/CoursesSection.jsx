import React from 'react';

const courses = [
  {
    title: 'Fundamentos de Programación',
    description: 'Ideal para comenzar desde cero y entender la lógica del código.',
  },
  {
    title: 'Python para Principiantes',
    description: 'Curso completo con ejercicios prácticos y proyectos reales.',
  },
  {
    title: 'Desarrollo Web Full Stack',
    description: 'Desde HTML hasta bases de datos y APIs, aprende todo el stack.',
  },
];

const CoursesSection = () => {
  return (
    <section id="cursos" className="bg-gray-50 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Cursos Destacados</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((course, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a href="#registro" className="text-blue-600 hover:underline font-semibold">Ver todos los cursos</a>
      </div>
    </section>
  );
};

export default CoursesSection;