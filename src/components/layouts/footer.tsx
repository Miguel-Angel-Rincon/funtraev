import React from 'react';
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa6';
import '../styles/navbar.css';
import logoFuntra from '../../assets/imagenes/logo/LogoFuntraev.png'; // Ajusta la ruta según tu estructura

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
    { name: 'Inicio', url: '/inicio' },
    { name: 'Nosotros', url: '/nosotros' },
    { name: 'Servicios', url: '/servicios' },
    { name: 'Contacto', url: '/contacto' }
  ];

  return (
    <footer className="funtraev-footer">
      <div className="funtraev-footer-content">
        {/* Columna Izquierda - Logo y Nombre */}
        <div className="funtraev-footer-left">
            <div className="funtraev-brand-container">
            <img
              src={logoFuntra}
              alt="Funtraev Logo"
              className="funtraev-logo-img"
            />
            <h2 className="funtraev-brand-name">FUNTRAEV</h2>
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