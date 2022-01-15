import Link from 'next/link';
import react from 'react';
import { Section } from './styles';

export const Contact = () => {
  return (
    <Section id="contact">
      <div className="info">
        <h2>Entre em contato com a gente!</h2>
        <p>Entre em contato com a Agape,
          queremos tirar suas dúvidas, ouvir suas críticas e sugestões.</p>
        <a href="#">
          <button><img src="./image/whatsapp.svg" alt="Whatsapp" />Entrar em contato</button>
        </a>
      </div>
      <div className="contacts">
        <div className="tel">
          <a href="tel:+554436231092">
            <img src="./image/tel.svg" alt="Telefone" />
            44 3623-1092
          </a>
        </div>
        <div className="localization">
          <a href="https://goo.gl/maps/jqKe7dhvaX1PRBPd7">
            <img src="./image/localization.svg" alt="Localização" />
            R. Rua Paulo Perussi 6354
            Parque bandeirantes - Umuarama Pr
          </a>
        </div>
        <div className="tel">
          <a href="mailto:agapeoc@hotmail.com">
            <img src="./image/mail.svg" alt="E-mail" />
            agapeoc@hotmail.com
          </a>
        </div>
      </div>
    </Section>
  )
}