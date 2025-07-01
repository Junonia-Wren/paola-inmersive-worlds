
const SkillsSection = () => {
  const skillCategories = [
    {
      title: "🛠️ Modelado 3D",
      skills: ["Blender", "3DS Max", "Maya", "ZBrush"],
      color: "from-pastel-purple to-pastel-pink"
    },
    {
      title: "🧠 Desarrollo de Entornos Virtuales",
      skills: ["Unity 3D", "Unreal Engine", "WebGL", "Three.js"],
      color: "from-pastel-pink to-pastel-green"
    },
    {
      title: "🌐 Diseño de Interfaces VR/AR",
      skills: ["ARCore", "Vuforia", "Oculus SDK", "WebXR"],
      color: "from-pastel-green to-pastel-beige"
    }
  ];

  const software = [
    { name: "Blender", level: 90, color: "bg-orange-400" },
    { name: "Unity", level: 85, color: "bg-purple-400" },
    { name: "Adobe Illustrator", level: 80, color: "bg-yellow-400" },
    { name: "Photoshop", level: 88, color: "bg-blue-400" },
    { name: "SimLab VR Studio", level: 75, color: "bg-green-400" },
  ];

  return (
    <section id="habilidades" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">
            ⚙️ Habilidades y Herramientas
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pastel-purple to-pastel-green rounded-full mx-auto"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Categorías de habilidades */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="cute-card p-6 hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className={`bg-gradient-to-r ${category.color} bg-opacity-20 border border-white/30 px-4 py-2 rounded-xl text-center font-semibold text-gray-700 hover:shadow-md transition-all duration-300`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Nivel de software */}
          <div className="cute-card p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">💻 Dominio de Software</h3>
            <div className="space-y-6 max-w-4xl mx-auto">
              {software.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-800">{item.name}</span>
                    <span className="text-sm text-gray-600">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`${item.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
