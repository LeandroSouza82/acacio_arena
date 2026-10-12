import { ADDRESS, BRAND, OPENING_HOURS, SOCIAL_LINKS } from '../../constants/config';
import Icon from '../ui/Icon';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <p className="logo">
            <span className="logo__mark">A</span>
            <span>
              Acácio <strong>Arena</strong>
            </span>
          </p>
          <p className="muted">{BRAND.tagline}</p>
        </div>
        <div>
          <h3 className="footer__title">Endereço</h3>
          <p className="muted">
            <Icon name="pin" size={16} /> {ADDRESS.street}
            <br />
            {ADDRESS.city}
          </p>
        </div>
        <div>
          <h3 className="footer__title">Horários</h3>
          <ul className="footer__list">
            {OPENING_HOURS.map((item) => (
              <li key={item.days}>
                <Icon name="clock" size={16} /> {item.days}: {item.hours}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="footer__title">Redes</h3>
          <a
            className="muted"
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram @acacioarena
          </a>
        </div>
      </div>
      <p className="container footer__copy">
        © {new Date().getFullYear()} {BRAND.name}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
