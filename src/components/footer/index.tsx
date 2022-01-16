import React from "react"
import Link from "next/link"
import { Section } from "./styles"
import Image from "next/image"
import logo from "../../../public/image/sliderr-logo.svg"
import instagram from "../../../public/image/instagram.svg"
import facebook from "../../../public/image/face.svg"
import whatsapp from "../../../public/image/whatsappFooter.svg"
import whatsappfloat from "../../../public/image/whatsapp-icon-seeklogo.com.svg"

export const Footer = () => {
  return (
    <Section id="footer">
      <div className="contentLogo">
        <div className="copy">
          <div className="image">
            <Link href="/">
              <a>
                <Image src={logo} alt="Logo" />
              </a>
            </Link>
          </div>
          <p>©2021 Agape.</p>
          <p>Todos os direitos reservados.</p>
        </div>
        <div className="social">
          <Link href="htttps://instagram.com">
            <a target="_blank">
              <Image src={instagram} alt="Intagram" />
            </a>
          </Link>
          <Link href="https://facebook.com">
            <a target="_blank">
              <Image src={facebook} alt="Facebook" />
            </a>
          </Link>
          <Link href="https://api.whatsapp.com/send?phone=5544984449862&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site.">
            <a target="_blank">
              <Image src={whatsapp} alt="Whatsapp" />
            </a>
          </Link>
        </div>
      </div>
      <div className="floatButton">
        <Link href="https://api.whatsapp.com/send?phone=5544984449862&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site.">
          <a target="_blank">
            <Image src={whatsappfloat} alt="Whatsapp" />
          </a>
        </Link>
      </div>
    </Section>
  )
}