
import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('inicio');

  const navItems = [
    { id: 'inicio', label: 'Inicio', path: '/' },
    { id: 'sobre-mi', label: 'Sobre mí', path: '/sobre-mi' },
    { id: 'proyectos', label: 'Proyectos', path: '/proyectos' },
    { id: 'galeria', label: 'Galería 3D', path: '/galeria' },
    { id: 'formacion', label: 'Formación', path: '/formacion' },
    { id: 'certificaciones', label: 'Certificaciones', path: '/certificaciones' },
    { id: 'habilidades', label: 'Habilidades', path: '/habilidades' },
    { id: 'contacto', label: 'Contacto', path: '/contacto' },
  ];

  useEffect(() => {
    const currentPath = location.pathname;
    const currentNav = navItems.find(item => item.path === currentPath);
    if (currentNav) {
      setActiveSection(currentNav.id);
    }
  }, [location.pathname]);

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
              <Link
                key={item.id}
                to={item.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-pastel-purple to-pastel-pink text-gray-800 shadow-md'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
                }`}
              >
                {item.label}
              </Link>
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
