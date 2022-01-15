import { LottieScrol } from "../LottieScrol"
import { Section } from "./styles."

export function Hero() {
  return (
    <Section id="home">
      <div className="container">
        <h1>O que a Contabilidade pode fazer pela sua empresa?</h1>
        <p>Queremos ser mais que um escritório de
          contabilidade na vida de vossa empresa, queremos ser um
          parceiro para a todas as horas.</p>
      </div>
      <LottieScrol />
    </Section>

  )
}