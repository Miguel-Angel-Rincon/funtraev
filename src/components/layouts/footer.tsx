import React, { useEffect, useState } from 'react';
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa6';
import '../styles/footer.css';
import logoFuntra from '../../assets/imagenes/logo/LogoFuntraev.png';

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  className: string;
}

interface ServiceLink {
  name: string;
  url: string;
}

const Footer: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sincronizar con el tema del Navbar
  useEffect(() => {
    const checkTheme = () => {
      const hasDarkMode = document.documentElement.classList.contains('dark-mode');
      setIsDarkMode(hasDarkMode);
    };

    // Verificar tema inicial
    checkTheme();

    // Observar cambios en el tema
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  const socialLinks: SocialLink[] = [
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp />,
      url: 'https://wa.me/573227491364',
      className: 'whatsapp'
    },
    {
      name: 'Facebook',
      icon: <FaFacebookF />,
      url: 'https://facebook.com/funtraev',
      className: 'facebook'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://instagram.com/funtraev',
      className: 'instagram'
    }
  ];

  const serviceLinks: ServiceLink[] = [
    { name: 'Inicio', url: '/' },
    { name: 'Nosotros', url: '/nosotros' },
    { name: 'Servicios', url: '/servicios' },
    { name: 'Contacto', url: '/contactenos' }
  ];

  return (
    <footer className={`funtraev-footer ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="funtraev-footer-content">
        {/* Columna Izquierda - Logo y Nombre */}
        <div className="funtraev-footer-left">
          <div className="funtraev-brand-container">
            <img
              src={logoFuntra}
              alt="Funtraev Logo"
              className="funtraev-logo-img"
            />
            <h2 className="funtraev-brand-name">Funtraev</h2>
          </div>
        </div>

        {/* Columna Centro - Redes Sociales */}
        <div className="funtraev-footer-center">
          <div className="funtraev-social-links">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className={`funtraev-social-link ${social.className}`}
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Columna Derecha - Links de Servicios */}
        <div className="funtraev-footer-right">
          <nav className="funtraev-service-links">
            {serviceLinks.map((service) => (
              <a
                key={service.name}
                href={service.url}
                className="funtraev-service-link"
              >
                {service.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Copyright abajo */}
      <div className="funtraev-copyright-container">
        <p className="funtraev-copyright">
          © {new Date().getFullYear()} Funtraev | Carrera 78 # 45A-36, Medellín, Colombia | Tel: +57 322 7491364
        </p>
      </div>
    </footer>
  );
};

export default Footer;