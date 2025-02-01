import React from 'react';
import { Menu, X, Github, Linkedin, FileText } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-gray-100">
            Pradyumna Wagholikar
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-gray-100 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/pradyumna9195"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-100"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/pradyumna-wagholikar-0211a71bb/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-100"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="./RESUME4.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-100"
              >
                <FileText className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-300 hover:text-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 py-2">
              <a
                href="https://github.com/pradyumna9195"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-100"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/pradyumna-wagholikar-0211a71bb/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-100"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="/RESUME4.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-100"
              >
                <FileText className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
