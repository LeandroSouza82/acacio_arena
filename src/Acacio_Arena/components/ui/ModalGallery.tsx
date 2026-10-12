import { useEffect } from 'react';
import type { GalleryItem } from '../../types';
import Icon from './Icon';

interface ModalGalleryProps {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
}

export default function ModalGallery({ items, index, onClose, onChange }: ModalGalleryProps) {
  useEffect(() => {
    if (index === null) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onChange((index + 1) % items.length);
      if (event.key === 'ArrowLeft') onChange((index - 1 + items.length) % items.length);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [index, items.length, onClose, onChange]);

  if (index === null) return null;
  const item = items[index];

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={item.alt} onClick={onClose}>
      <figure className="modal__body" onClick={(event) => event.stopPropagation()}>
        <img src={item.src} alt={item.alt} decoding="async" />
        {item.caption && <figcaption>{item.caption}</figcaption>}
        {items.length > 1 && (
          <div className="modal__nav">
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => onChange((index - 1 + items.length) % items.length)}
            >
              Anterior
            </button>
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => onChange((index + 1) % items.length)}
            >
              Próxima
            </button>
          </div>
        )}
      </figure>
      <button type="button" className="modal__close" onClick={onClose} aria-label="Fechar galeria">
        <Icon name="close" />
      </button>
    </div>
  );
}
