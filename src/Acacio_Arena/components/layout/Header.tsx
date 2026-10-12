import { useEffect, useState } from 'react';
import { BRAND, NAV_LINKS } from '../../constants/config';
import { MESSAGES, buildWhatsAppLink } from '../../utils/whatsappHelper';
import Button from '../ui/Button';
import Icon from '../ui/Icon';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#topo" className="logo" aria-label={`${BRAND.name} — início`}>
          <span className="logo__mark">A</span>
          <span>
            Acácio <strong>Arena</strong>
          </span>
        </a>

        <nav className={`nav${open ? ' nav--open' : ''}`} aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <div className="header__cta">
            <Button href={buildWhatsAppLink(MESSAGES.general)}>
              <Icon name="whatsapp" size={18} /> WhatsApp
            </Button>
          </div>
          <button
            type="button"
            className="header__toggle"
            aria-expanded={open}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
