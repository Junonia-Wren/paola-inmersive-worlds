
const CertificationsSection = () => {
  const certifications = [
    {
      title: "Microsoft Excel 2019",
      icon: "📊",
      color: "from-green-400 to-green-600"
    },
    {
      title: "Microsoft Word 2019",
      icon: "📝",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "SimLab Soft – Creación de VR",
      icon: "🥽",
      color: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section id="certificaciones" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">
            📜 Certificaciones
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pastel-purple to-pastel-green rounded-full mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="cute-card p-6 text-center hover:scale-105 transition-all duration-300 group"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${cert.color} rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl group-hover:animate-float`}>
                  {cert.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{cert.title}</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-pastel-purple to-pastel-pink rounded-full mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
