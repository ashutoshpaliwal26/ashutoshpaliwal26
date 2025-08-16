import { useState, useEffect } from 'react';
import { Menu, X, } from 'lucide-react';
import { motion } from 'framer-motion';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 `}
    >
      <motion.div 
        initial={{
          y : -50,
          opacity : 0
        }}
        animate = {{
          y : 0,
          opacity : 1
        }}
        transition={{
          duration : 1
        }}
        className="container mx-auto px-8"
      >
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold text-primary-foreground">
            {/* A<span className="text-accent-foreground">P</span> */}
          </a>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex space-x-6 h-12 items-center px-6 rounded-full ${isScrolled
              ? 'bg-background/80 backdrop-blur-md shadow-md'
              : 'bg-transparent'
            }`}>
            {navigationItems.map((item) => (
              <motion.a
                whileHover={{
                  scale : 1.1
                }}
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-primary-foreground transition-colors duration-200"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center">
            {/* <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-foreground hover:bg-secondary transition-colors duration-200 mr-2"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button> */}

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-foreground hover:bg-secondary transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-md shadow-lg"
        >
          <nav className="flex flex-col py-4">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-3 text-foreground/80 hover:text-primary-foreground hover:bg-secondary/30 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;