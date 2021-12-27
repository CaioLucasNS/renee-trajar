import React from 'react';

import { BackgroundHome } from './BackgroundHome/BackgroundHome';
import Logo from '../../utils/assets/logo.svg';
import wppIcon from '../../utils/assets/whatsapp-icon.png';

import './styles.scss';

export function Home() {
  return (
    <>
      <BackgroundHome />
      <div id="container">

        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>

        <div className="header">
          <h2>Elegante é ter um</h2>
          <h1>ALFAIATE</h1>
          <h2>Para chamar de seu.</h2>
        </div>

        <div className="content">
          <div>
            <span>
              COMPRE HOJE, <b>PAGUE EM ATÉ <br/>
              3X COM 12% DE DESCONTO</b> E <br/>
              TENHA 10 MESES PARA <br/>
              CONFECCIONAR!
            </span>

            <img src={wppIcon} alt="wppIcon" className="wppIcon"/>
          </div>

          <button>FAÇA JÁ UM ORÇAMENTO</button>

        </div>
      </div>
    </>
  );
};
