import React from 'react';

const MatchingColor = ({
  matchingColor,
  setRed,
  setGreen,
  setBlue,
  red,
  green,
  blue,
  randomColor,
}) => {
  return (
    <form>
      <div className='coloredSquares'>
        <div
          style={{
            background: matchingColor,
            width: '100px',
            height: '100px',
            border: '1px solid black',
            borderRadius: '5px',
          }}
        ></div>
        <div
          style={{
            background: randomColor,
            width: '100px',
            height: '100px',
            border: '1px solid black',
            borderRadius: '5px',
          }}
        ></div>
      </div>
      <div>
        <input
          draggable={false}
          value={red}
          onChange={(e) => {
            setRed(e.target.value);
          }}
          className='redSlider'
          type='range'
          min='0'
          max='255'
        />
      </div>
      <div>
        <input
          draggable={false}
          value={green}
          onChange={(e) => {
            setGreen(e.target.value);
          }}
          className='greenSlider'
          type='range'
          min='0'
          max='255'
        />
        <div>
          <input
            draggable={false}
            value={blue}
            onChange={(e) => {
              setBlue(e.target.value);
            }}
            className='blueSlider'
            type='range'
            min='0'
            max='255'
          />
        </div>
      </div>
    </form>
  );
};

export default React.memo(MatchingColor);
