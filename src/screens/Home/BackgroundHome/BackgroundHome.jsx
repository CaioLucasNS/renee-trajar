import React, { useState } from 'react';
import backgroundMobile from '../../../utils/assets/background-home-mobile.png';
import backgroundDesktop from '../../../utils/assets/background-home-desktop.png';

import './styles.scss';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height
  };
}

export function BackgroundHome () {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  return (
    <div className="bg-container">
      <img src={windowDimensions.width < 991 ? backgroundMobile : backgroundDesktop} alt="bg-mobile" className="bg-image"/>
    </div>
  );
};