import React from 'react'
import Image from 'next/image'
import aboutPhoto from '../../../public/image/aboutPhoto.png'
import { AboutSection } from './styles'

export const About = () => {
  return (
    <AboutSection id="about">
      <div className="imgSection">
        <Image src={aboutPhoto} alt="mãos sobre teclado do nootbook" />
      </div>
      <div className="description">
        <h2>Nossa Historia</h2>
        <p>Fundada no ano de 2011, na Cidade de Umuarama - PR, sendo um
          sonho idealizado pelo contador Thiago dos Santos Oliveira, que
          trabalha desde 2003, com contabilidade, e formado em Ciências
          Contábeis desde 2008. No ano de 2014, mais uma conquista,
          a abertura da filial da Cidade de Maria Helena - Paraná, outro
          desafio, que com a Graça de Deus, esta sendo abençoada.
          Neste ano de 2020, a Organização Contábil Agape.s
          promissoras da cidade.</p>
        <p><strong>Nossa Missão</strong>, será sempre auxiliar o empresario em sua tomada
          de decisão, sempre com o intuito da economia, tanto tributaria
          como financeira.</p>
      </div>
    </AboutSection>
  )
}

