
import { Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pastel-purple/20 via-pastel-pink/20 to-pastel-green/20 py-12 relative">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star className="w-6 h-6 text-purple-500 animate-glow" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Johana Paola Dionicio Contreras
            </span>
            <Star className="w-6 h-6 text-pink-500 animate-glow" />
          </div>
          
          <p className="text-gray-600 mb-4 text-lg">
            Diseñadora de experiencias inmersivas en 3D, VR y AR
          </p>
          
          <div className="flex justify-center items-center space-x-6 mb-8">
            <a 
              href="mailto:johanapaola166@gmail.com"
              className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
            >
              johanapaola166@gmail.com
            </a>
            <span className="text-gray-400">•</span>
            <a 
              href="tel:764-123-3658"
              className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
            >
              764-123-3658
            </a>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-pastel-purple to-pastel-pink rounded-full mx-auto mb-6"></div>
          
          <p className="text-gray-500 text-sm">
            © 2024 Johana Paola Dionicio Contreras. Creando mundos inmersivos con amor y tecnología. ✨
          </p>
        </div>
      </div>
      
      {/* Elementos decorativos */}
      <div className="absolute top-4 left-10 w-3 h-3 bg-pastel-pink rounded-full animate-float"></div>
      <div className="absolute bottom-4 right-20 w-2 h-2 bg-pastel-purple rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-8 right-10 w-4 h-4 bg-pastel-green rounded-full animate-float" style={{animationDelay: '2s'}}></div>
    </footer>
  );
};

export default Footer;
