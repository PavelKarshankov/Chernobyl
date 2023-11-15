import React from 'react';
import Slider from 'react-touch-drag-slider';
import '../subComponents/Likvidators/style.css';
import images from '../subComponents/Likvidators/images';
import styled from 'styled-components';
import { lazy } from 'react';
const PowerButton = lazy(() => import('../subComponents/PowerButton'));

function App() {
  return (
    <main>
      <PowerButton />
      <Slider>
        {images.map(({ url, title, p, h1 }, index) => (
          <>
            <img src={url} key={index} alt={title} />
            <div className="text-container">
              <p>{p}</p>
            </div>
          </>
        ))}
      </Slider>
    </main>
  );
}

export default App;
