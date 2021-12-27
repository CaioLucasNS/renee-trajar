import React from 'react';
import photo from '../../utils/assets/photos/camisaria.png';

import './styles.scss';

export function ShirtShop() {
  return (
    <div id="container-shirt-shop">

      <div className="photo">
        <img src={photo} alt="photo-camisaria" />
      </div>

      <div className="content">
        <div className="header">
          <h1>CAMISARIA</h1>
          <p>CONFECCIONADAS ARTESANALMENTE</p>
        </div>

        <div className="list">
          <ul>
            <li>100% Algodão</li>
            <li>Monograma</li>
            <li>Slim</li>
            <li>Nacionais e Importadas</li>
            <li>Tradicionais e Esportivas</li>
            <li>Casamentos</li>
          </ul>
        </div>

        <button>Quero um orçamento</button>
      </div>

    </div>
  );
}
