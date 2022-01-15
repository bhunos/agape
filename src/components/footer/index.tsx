import { Section } from "./styles"

export const Footer = () => {
  return (
    <Section id="footer">
      <div className="contentLogo">
        <div className="copy">
          <div className="image">
            <a href="#">
              <img src="./image/sliderr-logo.svg" alt="Logo" />
            </a>
          </div>
          <p>©2021 Agape.</p>
          <p>Todos os direitos reservados.</p>
        </div>
        <div className="social">
          <a href="htttps://instagram.com">
            <img src="./image/instagram.svg" alt="Intagram" />
          </a>
          <a href="https://facebook.com">
            <img src="./image/face.svg" alt="Facebook" />
          </a>
          <a href="./image/whatsappFooter.svg">
            <img src="./image/whatsappFooter.svg" alt="Whatsapp" />
          </a>
        </div>
      </div>
      <div className="floatButton">
        <a href="#">
          <img src="./image/whatsapp-icon-seeklogo.com.svg" alt="Whatsapp" />
        </a>
      </div>
    </Section>
  )
}