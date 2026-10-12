import { SPORTS } from '../../data/sportsData';
import { buildWhatsAppLink } from '../../utils/whatsappHelper';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Icon from '../ui/Icon';

export default function SportsSection() {
  return (
    <section className="container section" id="modalidades" aria-labelledby="modalidades-titulo">
      <header className="section__head">
        <p className="eyebrow">Modalidades</p>
        <h2 id="modalidades-titulo">Escolha seu jogo</h2>
      </header>
      <div className="grid grid--3">
        {SPORTS.map((sport) => (
          <Card key={sport.id} accent={sport.accent}>
            {sport.image ? (
              <img
                className="card__media"
                src={sport.image}
                alt={sport.title}
                loading="lazy"
                decoding="async"
                width={600}
                height={450}
              />
            ) : (
              <div className="card__media card__media--icon">
                <Icon name={sport.icon} size={56} />
              </div>
            )}
            <div className="card__body">
              <h3>{sport.title}</h3>
              <p className="muted">{sport.description}</p>
              <ul className="badges">
                {sport.highlights.map((item) => (
                  <li key={item}>
                    <Badge accent={sport.accent}>{item}</Badge>
                  </li>
                ))}
              </ul>
              <Button
                variant={sport.accent}
                block
                href={buildWhatsAppLink(sport.whatsappMessage)}
              >
                {sport.ctaLabel}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
