import { MESSAGES, buildWhatsAppLink } from '../../utils/whatsappHelper';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

const HERO_BADGES = ['100% Coberto', 'Vestiários', 'Churrasqueira & Bar', 'Ambiente Familiar'];

export default function HeroSection() {
  return (
    <section className="hero" id="topo">
      <img
        className="hero__bg"
        src="/images/society.jpg"
        alt="Quadra de society sintético coberta da Acácio Arena à noite"
        fetchPriority="high"
        decoding="async"
      />
      <div className="hero__shade" />
      <div className="container hero__content">
        <p className="eyebrow">Acácio Arena</p>
        <h1>Acácio Arena: Tradição, Esporte e Eventos em Espaço 100% Coberto.</h1>
        <p className="lead">
          Futebol society sintético de qualidade, quadra de areia e artes marciais. O ponto de
          encontro do esporte local e a melhor estrutura para sua resenha ou festa.
        </p>
        <ul className="badges">
          {HERO_BADGES.map((label, index) => (
            <li key={label}>
              <Badge accent={index % 2 === 0 ? 'green' : 'sand'}>{label}</Badge>
            </li>
          ))}
        </ul>
        <div className="actions">
          <Button href={buildWhatsAppLink(MESSAGES.society)}>Reservar Horário</Button>
          <Button variant="sand" href={buildWhatsAppLink(MESSAGES.events)}>
            Consultar Espaço para Festas
          </Button>
        </div>
      </div>
    </section>
  );
}
