import { useState } from 'react';
import { COURTS, SCHEDULE, SHIFTS } from '../../data/scheduleData';
import type { CourtId } from '../../types';
import { buildWhatsAppLink, slotMessage } from '../../utils/whatsappHelper';
import Icon from '../ui/Icon';

export default function ScheduleStatus() {
  const [court, setCourt] = useState<CourtId>('society');
  const accent = court === 'society' ? 'green' : 'sand';

  return (
    <section className="container section" id="horarios" aria-labelledby="horarios-titulo">
      <header className="section__head">
        <p className="eyebrow">Grade de horários</p>
        <h2 id="horarios-titulo">Escolha seu turno</h2>
        <p className="muted">Toque em um horário disponível para reservar pelo WhatsApp.</p>
      </header>

      <div className="tabs" role="tablist" aria-label="Quadra">
        {COURTS.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={court === item.id}
            className={`tabs__tab${court === item.id ? ' tabs__tab--active' : ''}`}
            onClick={() => setCourt(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="grid grid--3">
        {SHIFTS.map((shift) => (
          <div key={shift.id} className="shift">
            <h3>
              {shift.label} <span className="muted">{shift.range}</span>
            </h3>
            <ul className="slots">
              {SCHEDULE.filter((slot) => slot.court === court && slot.shift === shift.id).map(
                (slot) => (
                  <li key={slot.id}>
                    {slot.status === 'available' ? (
                      <a
                        className={`slot slot--available slot--${accent}`}
                        href={buildWhatsAppLink(slotMessage(slot))}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>
                          {slot.weekday} · {slot.time}
                        </span>
                        <span className="slot__status">
                          Disponível <Icon name="arrow" size={14} />
                        </span>
                      </a>
                    ) : (
                      <div className="slot slot--fixed" aria-disabled="true">
                        <span>
                          {slot.weekday} · {slot.time}
                        </span>
                        <span className="slot__status">{slot.label ?? 'Fixo'}</span>
                      </div>
                    )}
                  </li>
                ),
              )}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
