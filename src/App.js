import styled from '@emotion/styled';
import randomColor from 'randomcolor';
import { useState } from 'react';
import './App.css';

const StyledP = styled.p`
  color: #4287f5;
  background-color: ${(props) => props.color};
  font-size: 40px;
  transition: background-color 2s;
`;

const StyledBox = styled.p`
  height: ${(props) => props.height + 'px'};
  width: ${(props) => props.width + 'px'};
  background-color: red;
`;

export function PToColor() {
  const [color, setColor] = useState('');
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');
  const [height, setHeight] = useState('100');
  const [width, setWidth] = useState('100');
  const [draftHeight, setDraftHeight] = useState('100');
  const [draftWidth, setDraftWidth] = useState('100');

  function updateColor() {
    return setColor(
      randomColor({
        luminosity: luminosity.target.value,
        hue: hue.target.value,
      }),
    );
  }

  function drawBox() {
    setHeight(draftHeight);
    setWidth(draftWidth);
  }

  return (
    <div>
      <StyledP color={color}>This text has color : {color}.</StyledP>
      <fieldset>
        <label htmlFor="hue">Hue: </label>
        <input type="text" id="hue" onChange={setHue} />
        <br />
        <label htmlFor="luminosity">Luminosity: </label>
        <input type="text" id="luminosity" onChange={setLuminosity} />
        <br />
        <button onClick={updateColor}>Change color</button>
      </fieldset>
      <p>
        <label htmlFor="height">Height: </label>
        <input
          type="text"
          id="height"
          onChange={(e) => {
            setDraftHeight(e.target.value);
          }}
        />
        <br />
        <label htmlFor="width">Width: </label>
        <input
          type="text"
          id="width"
          onChange={(e) => {
            setDraftWidth(e.target.value);
          }}
        />
        <br />
        <button onClick={drawBox}>Draw box</button>
      </p>
      <StyledBox height={height} width={width} />
    </div>
  );
}
