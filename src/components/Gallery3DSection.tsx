
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gallery3DSection = () => {
  const models3D = [
    {
      title: "Personaje Fantasy",
      description: "Modelado completo de personaje para videojuego 3D",
      category: "Personajes"
    },
    {
      title: "Personaje Videojuego",
      description: "Diseño y Modelado de personaje de Historia de Videojuego",
      category: "Entornos"
    },
    {
      title: "Assets",
      description: "Objetos 3D utilizado para escenarios",
      category: "Objetos"
    }
  ];

  const animations = [
    {
      title: "Animación de Personaje",
      description: "Ciclos de animación para personajes de videojuego",
      category: "Personajes"
    },
    {
      title: "Efectos Visuales",
      description: "Animaciones de partículas y efectos especiales",
      category: "VFX"
    }
  ];

  const illustrations = [
    {
      title: "Concept Art",
      description: "Ilustraciones conceptuales para juagdores de Videojuego 3D",
      category: "Conceptos"
    },
    {
      title: "Interface Design",
      description: "Diseño de interfaces para aplicacion VR",
      category: "UI/UX"
    }
  ];

  const renderGalleryItems = (items: typeof models3D) => (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <div 
          key={index}
          className="cute-card p-6 hover:scale-105 transition-all duration-300 group cursor-pointer"
        >
          <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-4 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-4 bg-gradient-to-br from-pastel-purple/20 via-pastel-pink/20 to-pastel-green/20 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">🎭</div>
                <div className="text-sm text-gray-600 font-medium">Contenido Interactivo</div>
              </div>
            </div>
            
            <div className="absolute bottom-2 right-2 bg-white/80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 border-2 border-dashed border-gray-400 rounded-full animate-spin"></div>
            </div>
            
            <div className="absolute top-2 left-2 bg-gradient-to-r from-pastel-purple to-pastel-pink text-white text-xs px-2 py-1 rounded-full font-semibold">
              {item.category}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
            </div>
            
            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            
            <div className="flex gap-2 pt-2">
              <button className="flex-1 bg-gradient-to-r from-pastel-purple/60 to-pastel-pink/60 text-gray-800 font-semibold py-2 text-sm rounded-xl hover:shadow-md transition-all duration-300">
                Ver contenido 🔄
              </button>
              <button className="bg-gradient-to-r from-white/60 to-white/40 border border-white/50 text-gray-700 font-semibold py-2 px-4 text-sm rounded-xl hover:shadow-md transition-all duration-300">
                ℹ️
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="galeria" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">
            ✨ Mis creaciones en 3D 💫
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pastel-purple to-pastel-green rounded-full mx-auto"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Galería interactiva de modelos 3D - Haz clic para explorar cada modelo en detalle
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="modelos3d" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="modelos3d">Modelos 3D</TabsTrigger>
              <TabsTrigger value="animaciones">Animaciones</TabsTrigger>
              <TabsTrigger value="ilustraciones">Ilustraciones</TabsTrigger>
            </TabsList>
            
            <TabsContent value="modelos3d" className="space-y-8">
              {renderGalleryItems(models3D)}
            </TabsContent>
            
            <TabsContent value="animaciones" className="space-y-8">
              {renderGalleryItems(animations)}
            </TabsContent>
            
            <TabsContent value="ilustraciones" className="space-y-8">
              {renderGalleryItems(illustrations)}
            </TabsContent>
          </Tabs>

          {/* Nota sobre integración */}
          <div className="cute-card p-6 mt-12 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-3">🔧 Integración de Contenido Interactivo</h3>
            <p className="text-gray-600 leading-relaxed">
              Esta galería está preparada para integrar visores 3D como <strong>Sketchfab</strong>, 
              archivos <strong>glTF</strong> o <strong>WebGL</strong>, así como reproductores de video para animaciones 
              e imagen en alta resolución para ilustraciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery3DSection;
