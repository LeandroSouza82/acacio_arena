import { useCallback, useMemo, useState } from 'react';
import { CHAMPIONSHIPS, HISTORY_TEXT, UPCOMING } from '../../data/championshipsData';
import type { GalleryItem } from '../../types';
import { buildWhatsAppLink } from '../../utils/whatsappHelper';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Icon from '../ui/Icon';
import ModalGallery from '../ui/ModalGallery';

export default function HistoryChampionships() {
  const [active, setActive] = useState<number | null>(null);

  const gallery = useMemo<GalleryItem[]>(
    () =>
      CHAMPIONSHIPS.filter((item) => item.image).map((item) => ({
        src: item.image as string,
        alt: item.title,
        caption: `${item.title} — ${item.year}`,
      })),
    [],
  );

  const close = useCallback(() => setActive(null), []);

  return (
    <section className="container section" id="copa" aria-labelledby="copa-titulo">
      <header className="section__head">
        <p className="eyebrow eyebrow--sand">Copa da Comunidade & História</p>
        <h2 id="copa-titulo">Tradição que vem do esporte local</h2>
        <p className="muted">{HISTORY_TEXT}</p>
      </header>

      <div className="split">
        <ol className="timeline">
          {CHAMPIONSHIPS.map((item) => {
            const galleryIndex = gallery.findIndex((g) => g.src === item.image);
            return (
              <li key={item.id} className="timeline__item">
                <span className="timeline__year">{item.year}</span>
                <h3>{item.title}</h3>
                <p className="muted">{item.summary}</p>
                {item.image && (
                  <button
                    type="button"
                    className="timeline__thumb"
                    onClick={() => setActive(galleryIndex)}
                    aria-label={`Ver fotos: ${item.title}`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      width={320}
                      height={240}
                    />
                  </button>
                )}
              </li>
            );
          })}
        </ol>

        <Card accent="sand">
          <div className="card__body">
            <Icon name="trophy" size={36} />
            <h3>{UPCOMING.title}</h3>
            <p className="eyebrow eyebrow--sand">{UPCOMING.period}</p>
            <p className="muted">{UPCOMING.description}</p>
            <Button variant="sand" block href={buildWhatsAppLink(UPCOMING.whatsappMessage)}>
              Inscrever meu time
            </Button>
          </div>
        </Card>
      </div>

      <ModalGallery items={gallery} index={active} onClose={close} onChange={setActive} />
    </section>
  );
}
