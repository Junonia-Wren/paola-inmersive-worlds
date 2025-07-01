
const EducationSection = () => {
  return (
    <section id="formacion" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            📚 Formación Académica
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pastel-purple to-blue-400 rounded-full mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Ingeniería en curso */}
            <div className="cute-card p-8 hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pastel-green to-pastel-beige rounded-2xl flex items-center justify-center text-2xl">
                  🎓
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-800">
                      Ingeniería en Entornos Virtuales y Negocios Digitales
                    </h3>
                    <span className="bg-gradient-to-r from-pastel-green to-pastel-beige text-gray-800 text-xs px-3 py-1 rounded-full font-semibold">
                      En curso
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">2024 – Actual</p>
                  <p className="text-gray-700 font-semibold">Universidad Tecnológica de Xicotepec de Juárez</p>
                </div>
              </div>
            </div>

            {/* TSU completado */}
            <div className="cute-card p-8 hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pastel-purple to-pastel-pink rounded-2xl flex items-center justify-center text-2xl">
                  ✅
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-800">
                      Técnico Superior Universitario en Entornos Virtuales y Negocios Digitales
                    </h3>
                    <span className="bg-gradient-to-r from-pastel-purple to-pastel-pink text-white text-xs px-3 py-1 rounded-full font-semibold">
                      Completado
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">2022 – 2024</p>
                  <p className="text-gray-700 font-semibold">Universidad Tecnológica de Xicotepec de Juárez</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
