import React, { useState, useMemo, useEffect } from 'react';
// import RandomColor from './RandomColor';
import MatchingColor from './MatchingColor';

const App = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [similarity, setSimilarity] = useState(0);
  const [shownSim, setShownSim] = useState(false);

  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let blu = Math.floor(Math.random() * 256);
  const matchingColor = `rgb(${red}, ${green}, ${blue})`;
  const randomColor = 'rgb(' + r + ',' + g + ',' + blu + ')';

  const memoizedRandomColor = useMemo(() => {
    return randomColor;
  }, []);

  const color1 = matchingColor;
  const color2 = memoizedRandomColor;

  function calculateColorSimilarity(rgb1, rgb2) {
    const color1 = rgb1.match(/\d+/g).map(Number);
    const color2 = rgb2.match(/\d+/g).map(Number);

    const r1 = color1[0];
    const g1 = color1[1];
    const b1 = color1[2];
    const r2 = color2[0];
    const g2 = color2[1];
    const b2 = color2[2];

    const diff = Math.sqrt((r2 - r1) ** 2 + (g2 - g1) ** 2 + (b2 - b1) ** 2);

    const similarity =
      100 - (diff / Math.sqrt(255 ** 2 + 255 ** 2 + 255 ** 2)) * 100;

    return similarity;
  }

  useEffect(() => {
    const similarity = calculateColorSimilarity(color1, color2);
    setSimilarity(similarity);
  }, [color1, color2]);

  function handleSubmitColors(e) {
    e.preventDefault();
    setShownSim(!shownSim);
  }

  return (
    <main className='main'>
      {!shownSim ? (
        <button className='btn41-43 btn-42' onClick={handleSubmitColors}>
          Submit{' '}
        </button>
      ) : (
        <div style={{ display: 'grid', placeContent: 'center' }}>
          <p>similarity: {similarity.toFixed(2)}%</p>
          <button
            className='btn41-43 btn-42'
            onClick={() => window.location.reload()}
          >
            reset
          </button>
        </div>
      )}
      <MatchingColor
        matchingColor={matchingColor}
        setRed={setRed}
        setGreen={setGreen}
        setBlue={setBlue}
        red={red}
        green={green}
        blue={blue}
        randomColor={memoizedRandomColor}
      />
    </main>
  );
};

export default App;
