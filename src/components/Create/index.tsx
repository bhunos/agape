import { CreateStyled } from "./styles";
import React from "react";

export function Create() {
  return (
    <CreateStyled>
      <div className="container">
        <h1>Criar Conta</h1>
        <form action="" id="form-create" method="POST">
          <div className="last-line">
            <div className="line-one">
              <label>
                Nome<span>*</span>
              </label>
              <input type="text" placeholder="Insira seu nome aqui" required />
            </div>
            <div className="line-two">
              <label>
                Email<span>*</span>
              </label>
              <input type="email" placeholder="Insira seu email aqui" />
            </div>
          </div>
          <div className="second-line">
            <div className="line-one">
              <label>
                Telefone<span>*</span>
              </label>
              <input
                type="number"
                placeholder="Insira seu número de telefone aqui"
                required
              />
            </div>
            <div className="line-two">
              <label>
                Senha<span>*</span>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Insira sua senha aqui"
              />
            </div>
            <div className="line-tree">
              <label>
                Repita a Senha<span>*</span>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Insira sua senha aqui novamente"
              />
            </div>
          </div>
          <input className="createButton" type="submit" value="Criar conta" />
        </form>
      </div>
    </CreateStyled>
  );
}
