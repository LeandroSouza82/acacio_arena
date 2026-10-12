import { ADDRESS } from '../../constants/config';
import Button from '../ui/Button';
import Icon from '../ui/Icon';

const MAP_URL = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS.mapQuery)}&output=embed`;
const ROUTE_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS.mapQuery)}`;

export default function LocationContact() {
  return (
    <section className="container section" id="contato" aria-labelledby="contato-titulo">
      <div className="split split--center">
        <div>
          <p className="eyebrow">Localização</p>
          <h2 id="contato-titulo">Como chegar</h2>
          <p className="muted">
            <Icon name="pin" size={16} /> {ADDRESS.street}, {ADDRESS.city}
          </p>
          <Button variant="ghost" href={ROUTE_URL}>
            <Icon name="route" size={18} /> Traçar rota
          </Button>
        </div>
        <iframe
          className="map"
          title="Mapa da Acássio Arena"
          src={MAP_URL}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
