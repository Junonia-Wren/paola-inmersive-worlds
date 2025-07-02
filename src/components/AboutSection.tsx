
const AboutSection = () => {
  const qualities = [
    { emoji: '🌟', text: 'Proactiva' },
    { emoji: '🎨', text: 'Creativa' },
    { emoji: '📚', text: 'Autodidacta' },
    { emoji: '💬', text: 'Buena comunicación' },
    { emoji: '✅', text: 'Responsable' },
    { emoji: '🧩', text: 'Resolutiva' },
  ];

  return (
    <section id="sobre-mi" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            🌼 Sobre mí
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pastel-purple to-pastel-pink rounded-full mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="cute-card p-8">
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Diseñadora entusiasta de experiencias inmersivas con habilidades en modelado 3D, 
                entornos virtuales y VR/AR. Me caracterizo por mi iniciativa, creatividad y capacidad para aprender de forma autodidacta. Busco aportar
                soluciones innovadoras en proyectos tecnológicos o de entretenimiento digital.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">✨ Mis cualidades</h3>
                <div className="grid grid-cols-2 gap-4">
                  {qualities.map((quality, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-3 p-4 bg-gradient-to-r from-white/60 to-white/40 rounded-2xl border border-white/30 hover:scale-105 transition-transform duration-300"
                    >
                      <span className="text-2xl">{quality.emoji}</span>
                      <span className="font-semibold text-gray-700">{quality.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="cute-card p-8 text-center">
              <div className="relative mb-8">
                <div className="w-48 h-48 bg-gradient-to-br from-pastel-purple via-pastel-pink to-pastel-green rounded-full mx-auto flex items-center justify-center animate-glow">
                  <div className="w-40 h-40 bg-white/90 rounded-full flex items-center justify-center">
                    <span className="text-6xl">👩‍💻</span>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 text-3xl animate-float">🚀</div>
                <div className="absolute -bottom-4 -left-4 text-3xl animate-float" style={{animationDelay: '1s'}}>💫</div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-pastel-green/50 to-pastel-blue/50 rounded-2xl p-4">
                  <h4 className="font-bold text-gray-800 mb-2">🎯 Mi misión</h4>
                  <p className="text-gray-600">Crear experiencias inmersivas que inspiren y conecten con las emociones</p>
                </div>
                
                <div className="bg-gradient-to-r from-pastel-pink/50 to-pastel-purple/50 rounded-2xl p-4">
                  <h4 className="font-bold text-gray-800 mb-2">💡 Mi visión</h4>
                  <p className="text-gray-600">Ser referente en diseño de mundos virtuales únicos y memorables</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
