import React, { useState } from 'react';
import photo from '../../utils/assets/photos/alfaiataria.png';

import './styles.scss';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height
  };
}

export function Tailoring() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  return (
    <div id="container-tailoring">

      {
        windowDimensions.width < 991 &&
        <div className="photo">
          <img src={photo} alt="photo-alfaiataria" />
        </div>
      }
      <div className="content">
        <div className="header">
          <h1>ALFAIATARIA</h1>
          <p>TOTALMENTE FEITO A MÃO SOB MEDIDA</p>
        </div>

        <div>
          <ul className="list">
            <div>
              <li>Fio Super 120 e 130</li>
              <li>Lã fria Australiana</li>
              <li>Botões Importados</li>
            </div>
            <div>
              <li>Ternos e Calças</li>
              <li>Paletós e Smokings</li>
              <li>Sociais e Esportivos</li>
            </div>
          </ul>
        </div>
        <button>Quero um orçamento</button>
      </div>

      {
        windowDimensions.width > 991 &&
        <div className="photo">
          <img src={photo} alt="photo-alfaiataria" />
        </div>
      }

    </div>
  );
}
