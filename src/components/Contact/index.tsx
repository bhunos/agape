import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import whatsapp from '../../../public/image/whatsapp.svg'
import tel from '../../../public/image/tel.svg'
import localization from '../../../public/image/localization.svg'
import mail from '../../../public//image/mail.svg'
import { Section } from './styles';

export const Contact = () => {
  return (
    <Section id="contact">
      <div className="info">
        <h2>Entre em contato com a gente!</h2>
        <p>Entre em contato com a Agape,
          queremos tirar suas dúvidas, ouvir suas críticas e sugestões.</p>
        <Link href='https://api.whatsapp.com/send?phone=5544984449862&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site.'>
          <a target="_blank">
            <button><Image className="img" src={whatsapp} alt="Whatsapp" />Entrar em contato</button>
          </a>
        </Link>
      </div>
      <div className="contacts">
        <div className="tel">
          <Link href={'tel:+554436231092'}>
            <a target="_blank">
              <Image src={tel} alt="Telefone" />
              44 3623-1092
            </a>
          </Link>
        </div>
        <div className="localization">
          <Link href="https://goo.gl/maps/jqKe7dhvaX1PRBPd7">
            <a target="_blank">
              <Image className="localization" src={localization} alt="Localização" />
              R. Rua Paulo Perussi 6354
              Parque bandeirantes - Umuarama Pr
            </a>
          </Link>
        </div>
        <div className="tel">
          <Link href="mailto:agapeoc@hotmail.com">
            <a target="_blank">
              <Image src={mail} alt="E-mail" />
              agapeoc@hotmail.com
            </a>
          </Link>
        </div>
      </div>
    </Section>
  )
}