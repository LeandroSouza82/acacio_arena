import Icon from '../ui/Icon';

export default function WeatherAlert() {
  return (
    <section className="container section--tight" aria-labelledby="clima-titulo">
      <div className="weather">
        <span className="weather__icon">
          <Icon name="rain" size={32} />
        </span>
        <div>
          <h2 id="clima-titulo">Choveu? O jogo e o evento não param.</h2>
          <p>
            O tempo virou no litoral? Aqui o seu futebol, futevôlei e evento acontecem sem
            interrupção. Estrutura totalmente coberta à prova de mau tempo.
          </p>
        </div>
      </div>
    </section>
  );
}
