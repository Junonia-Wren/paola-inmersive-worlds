
import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  const navItems = [
    { id: 'inicio', label: 'Inicio', emoji: '🌸' },
    { id: 'sobre-mi', label: 'Sobre mí', emoji: '🌼' },
    { id: 'proyectos', label: 'Proyectos', emoji: '🧁' },
    { id: 'galeria', label: 'Galería 3D', emoji: '✨' },
    { id: 'formacion', label: 'Formación', emoji: '📚' },
    { id: 'certificaciones', label: 'Certificaciones', emoji: '📜' },
    { id: 'habilidades', label: 'Habilidades', emoji: '⚙️' },
    { id: 'contacto', label: 'Contacto', emoji: '💌' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-white/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Star className="w-6 h-6 text-primary animate-glow" />
            <span className="font-bold text-lg text-gray-800">Johana Paola</span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-pastel-purple to-pastel-pink text-gray-800 shadow-md'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
                }`}
              >
                <span className="mr-2">{item.emoji}</span>
                {item.label}
              </button>
            ))}
          </div>

          <div className="lg:hidden">
            <button className="p-2 rounded-full bg-white/50 hover:bg-white/70 transition-colors">
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-gray-600 rounded"></div>
                <div className="w-full h-0.5 bg-gray-600 rounded"></div>
                <div className="w-full h-0.5 bg-gray-600 rounded"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
