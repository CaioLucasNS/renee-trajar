import React from 'react';
import Logo from '../../utils/assets/logo-dark.svg';

import './styles.scss';

export function Contact() {
  return (
    <div className="container-contact">
      <div className="content1">
        <h1 className="title-contact">
          Contato
        </h1>

        <div className="content-form">
          <form className="form">
            {/* <label for="fname">First name:</label> */}
            <input
              type="text"
              id="name"
              className="name"
              name="name"
              placeholder="Nome"
            />

            {/* <label for="lname">Last name:</label> */}
            <input
              type="email"
              id="email"
              className="email"
              name="email"
              placeholder="E-mail"
            />

            <textarea
              rows="4"
              cols="40"
              placeholder="Mensagem"
              className="message"
            >

            </textarea>
            <button>Enviar Mensagem</button>
          </form>
        </div>
      </div>

      <div className="content2">
        <div className="content-contact">
          <h2>TELEFONES</h2>
          <p>+55(11)3088-0757</p>

          <h2>E-MAIL</h2>
          <p>renee@reneetrajar.com.br</p>

          <h2>ATENDIMENTO PERSONALIZADO</h2>
          <button>Clique aqui!</button>
        </div>

        <div className="footer">
          <img src={Logo} alt="logo" />
          <p>CNPJ:04.487.685/0001-01</p>

          <footer>Copyright: 2021 © Renee Trajar
            Todos os direitos reservados.</footer>
        </div>
      </div>
    </div>
  );
}
