import React from 'react'
import { ServicesContainer } from './styles'

export const Services = () => {
  return (
    <ServicesContainer id="services">
      <h2>Seviços</h2>
      <section className="cards">
        <div className="card">
          <img src="./image/working.svg" alt="" />
          <h3>Constituição de Empresas</h3>
          <div className="line"></div>
          <p>Abertura de empresas nos mais
            variadas formas: LTDA, Me, Eireli,
            ONG&apos;s, MEI, dentre outros.</p>
        </div>
        <div className="card">
          <img src="./image/contabil.svg" alt="" />
          <h3>Escrituração Contábil</h3>
          <div className="line"></div>
          <p>Conferencia de Notas Fiscais, apuração tributaria, emissão de tributos, transmissão de declarações ao fisco, dentre outros.</p>
        </div>
        <div className="card">
          <img src="./image/human.svg" alt="" />
          <h3>Recurso Humanos</h3>
          <div className="line"></div>
          <p>Calculo de folhas de pagamento, execução de admissão e demissão, orientação sobre temas trabalhistas, transmissão de Declarações ao fisco, dentre outros.</p>
        </div>
      </section>
      <section className="section">
        <div className="card">
          <img src="./image/tribut.svg" alt="" />
          <h3>Planejamento Tributário</h3>
          <div className="line"></div>
          <p>Estudo para o enquadramento da vossa empresa, na melhor forma possível, para uma maior economia fiscal.</p>
        </div>
        <div className="card">
          <img src="./image/outhers.svg" alt="" />
          <h3>Outros</h3>
          <div className="line"></div>
          <p>- Contabilidade de empresas sem fins lucrativos<br />
            - Apuração de Folha de pagamento Rural e Domestica.<br />
            - Implantação do E-Social.<br />
            - Consultoria empresarial.</p>
        </div>
      </section>
    </ServicesContainer >
  )
}
