
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProjectsSection = () => {
  const estadiaProjects = [
    {
      title: "Estadías en Model Pro MX",
      description: "Desarrollo de entorno de Realidad Virtual, optimizando los recursos para evitar la sobre carga en lentes MetaQuest",
      tech: ["SimLab VR Studio", "Adobe Ilustraitor", "Adobe After Effects"],
      color: "from-pastel-purple to-pastel-green",
      embedCode: "// Aquí iría el iframe de modelo 3D interactivo"
    }
  ];

  const personalProjects = [
    {
      title: "📱 App de RV y RA",
      description: "Diseño  de aplicación móvil con funcionalidades de Realidad Virtual y Realidad Aumentada, enfocada en experiencias educativas inmersivas.",
      tech: ["Unity", "ARCore", "Vuforia", "C#"],
      color: "from-pastel-green to-pastel-beige",
      embedCode: "// Aquí iría la demostración interactiva de AR/VR"
    }
  ];

  const academicProjects = [
    {
      title: "🎮 Diseño de modelos 3D para videojuego",
      description: "Modelado y texturización de assets 3D para videojuego desarrollado en Unity 3D, incluyendo personajes, objetos interactivos y elementos del entorno.",
      tech: ["Unity 3D", "Blender", "Substance Painter"],
      color: "from-pastel-pink to-pastel-purple",
      embedCode: "// Aquí iría el iframe de Sketchfab o visor WebGL"
    }
  ];

  const renderProjects = (projects: typeof estadiaProjects) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div 
          key={index}
          className="cute-card p-6 hover:scale-105 transition-all duration-300 group"
        >
          <div className={`h-48 bg-gradient-to-br ${project.color} rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden`}>
            <div className="text-center text-white">
              <div className="text-4xl mb-2">🎨</div>
              <p className="text-sm opacity-90">Vista previa 3D</p>
            </div>
            
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white/90 text-gray-800 px-4 py-2 rounded-full font-semibold text-sm hover:bg-white transition-colors">
                Ver modelo 3D ✨
              </button>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, techIndex) => (
              <span 
                key={techIndex}
                className="bg-gradient-to-r from-white/60 to-white/40 border border-white/30 px-3 py-1 rounded-full text-xs font-medium text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>

          <button className="w-full bg-gradient-to-r from-pastel-purple/60 to-pastel-pink/60 text-gray-800 font-semibold py-3 rounded-2xl hover:shadow-md transition-all duration-300 hover:scale-105">
            Ver detalles 🔍
          </button>
        </div>
      ))}
    </div>
  );

  return (
    <section id="proyectos" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">
            🧁 Proyectos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pastel-purple to-pastel-green rounded-full mx-auto"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Explora mis creaciones en el mundo de las experiencias inmersivas y el diseño 3D
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="estadia" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="estadia">Estadía</TabsTrigger>
              <TabsTrigger value="personales">Personales</TabsTrigger>
              <TabsTrigger value="academicos">Académicos</TabsTrigger>
            </TabsList>
            
            <TabsContent value="estadia" className="space-y-8">
              {renderProjects(estadiaProjects)}
            </TabsContent>
            
            <TabsContent value="personales" className="space-y-8">
              {renderProjects(personalProjects)}
            </TabsContent>
            
            <TabsContent value="academicos" className="space-y-8">
              {renderProjects(academicProjects)}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
