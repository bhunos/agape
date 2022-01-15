import { Section } from "./styles"

export const Documents = () => {
  return (
    <Section>
      <div className="title">
        <h1>Documentos</h1>
      </div>
      <div className="container">
        <div className="perfil">
          <div className="image">
            <img src="./image/logoteste.png" alt="Usuario" />
          </div>
          <h2>Name User</h2>
          <p>29.123.123.0001-00</p>
          <a href="">
            <button>Editar</button>
          </a>
        </div>
        <div className="content">
          <div className="card">
            <div className="header">
              <img src="./image/doc.svg" alt="" />
              <h2>name Doc</h2>
            </div>
            <div className="description">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A viverra cursus pulvinar senectus lorem lacus. </p>
              <img src="./image/download-file-square-line.svg" alt="" />
            </div>
          </div>
          <div className="card">
            <div className="header">
              <img src="./image/doc.svg" alt="" />
              <h2>name Doc</h2>
            </div>
            <div className="description">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A viverra cursus pulvinar senectus lorem lacus. Tortor ornare rhoncus vulputate hendrerit pellentesque volutpat aliquet vitae. Arcu egestas eu hendrerit vestibulum vivamus. Iaculis viverra laoreet urna condimentum mollis. In sed sodales amet sed diam urna, eget ipsum nunc. </p>
              <img src="./image/download-file-square-line.svg" alt="" />
            </div>
          </div>
          <div className="card">
            <div className="header">
              <img src="./image/doc.svg" alt="" />
              <h2>name Doc</h2>
            </div>
            <div className="description">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A viverra cursus pulvinar senectus lorem lacus. Tortor ornare rhoncus vulputate hendrerit pellentesque volutpat aliquet vitae. Arcu egestas eu hendrerit vestibulum vivamus. Iaculis viverra laoreet urna condimentum mollis. In sed sodales amet sed diam urna, eget ipsum nunc. </p>
              <img src="./image/download-file-square-line.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}