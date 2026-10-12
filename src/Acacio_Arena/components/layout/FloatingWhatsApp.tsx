import { useState } from 'react';
import { QUICK_OPTIONS, buildWhatsAppLink } from '../../utils/whatsappHelper';
import Icon from '../ui/Icon';

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fab">
      {open && (
        <div className="fab__menu" role="menu" aria-label="Opções de atendimento">
          {QUICK_OPTIONS.map((option, index) => (
            <a
              key={option.id}
              role="menuitem"
              className="fab__item"
              href={buildWhatsAppLink(option.message)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              <span className="fab__num">{index + 1}</span>
              {option.label}
            </a>
          ))}
        </div>
      )}
      <button
        type="button"
        className="fab__button"
        aria-expanded={open}
        aria-label={open ? 'Fechar opções de WhatsApp' : 'Abrir opções de WhatsApp'}
        onClick={() => setOpen((value) => !value)}
      >
        <Icon name={open ? 'close' : 'whatsapp'} size={28} />
      </button>
    </div>
  );
}
