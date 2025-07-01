
import { Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-pastel-pink rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-3 h-3 bg-pastel-purple rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-pastel-green rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-pastel-beige rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-pastel-pink rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="cute-card max-w-4xl mx-auto p-12 animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-pastel-purple via-pastel-pink to-pastel-green rounded-full flex items-center justify-center animate-glow">
                <Star className="w-16 h-16 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 text-2xl animate-float">✨</div>
              <div className="absolute -bottom-2 -left-2 text-2xl animate-float" style={{animationDelay: '1s'}}>🌸</div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-green-500 bg-clip-text text-transparent">
            Hola, soy Johana Paola Dionicio Contreras
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-semibold">
            Diseñadora de mundos inmersivos en 3D, VR y AR
          </p>
          
          <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Creando experiencias visuales que conectan tecnología con emoción, 
            transformando ideas en realidades inmersivas y mundos digitales únicos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
              className="cute-button"
            >
              Ver mis proyectos 🎨
            </button>
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/60 backdrop-blur-sm border border-white/50 text-gray-700 font-semibold py-3 px-6 rounded-full cute-shadow hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Trabajemos juntos 💌
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
