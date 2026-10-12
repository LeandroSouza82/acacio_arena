import { EVENT_FEATURES, EVENT_IMAGE } from '../../data/eventsData';
import { MESSAGES, buildWhatsAppLink } from '../../utils/whatsappHelper';
import Button from '../ui/Button';
import Icon from '../ui/Icon';

export default function EventsParties() {
  return (
    <section className="container section" id="festas" aria-labelledby="festas-titulo">
      <div className="split split--center">
        <img
          className="split__media"
          src={EVENT_IMAGE}
          alt="Festa infantil no salão com churrasqueira e bar da Acácio Arena"
          loading="lazy"
          decoding="async"
          width={600}
          height={450}
        />
        <div>
          <p className="eyebrow eyebrow--sand">Festas & Eventos</p>
          <h2 id="festas-titulo">Espaço coberto e seguro para sua festa</h2>
          <p className="muted">
            Aniversários, festas infantis e confraternizações com toda a estrutura que você precisa,
            sem se preocupar com o tempo.
          </p>
          <ul className="features">
            {EVENT_FEATURES.map((feature) => (
              <li key={feature.id}>
                <span className="features__icon">
                  <Icon name={feature.icon} />
                </span>
                <div>
                  <h3>{feature.title}</h3>
                  <p className="muted">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <Button variant="sand" href={buildWhatsAppLink(MESSAGES.events)}>
            Consultar disponibilidade e valores
          </Button>
        </div>
      </div>
    </section>
  );
}
