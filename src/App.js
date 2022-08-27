import './App.css';
import Drumpad from './components/Drumpad';
import { useState } from 'react';
import Q from '../src/media/Drum-Sticks-Hit-A.mp3';
import W from '../src/media/Crash-Cymbal-Hit-A.mp3';
import E from '../src/media/Crash-Cymbal-Hit-B.mp3';
import A from '../src/media/Floor-Tom-Drum-Hit-Level-4A.mp3';
import S from '../src/media/Hi-Hat-Closed-Hit-B1.mp3';
import D from '../src/media/Medium-Tom-Drum-Hit-Level-4A.mp3';
import Z from '../src/media/Snare-Drum-Hit-Level-3a.mp3';
import X from '../src/media/Hi-Hat-Closed-Hit-B1.mp3';
import C from '../src/media/Hi-Hat-Closed-Hit-B1.mp3';


const pads = [{
  key: 'Q',
  id: 'Sticks Hit',
  audio: Q
},
{
  key: 'W',
  id: 'Crash Cymbal Hit A',
  audio: W
},
{
  key: 'E',
  id: 'Crash Cymbal Hit B',
  audio: E
},
{
  key: 'A',
  id: 'Floor Tom Drum Hit',
  audio: A
},
{
  key: 'S',
  id: 'Sticks Hit',
  audio: S
},
{
  key: 'D',
  id: 'Sticks Hit',
  audio: D
},
{
  key: 'Z',
  id: 'Sticks Hit',
  audio: Z
},
{
  key: 'X',
  id: 'Sticks Hit',
  audio: X
},
{
  key: 'C',
  id: 'Sticks Hit',
  audio: C
}]

function App() {

  const [display, setDisplay] = useState('');

  
  const handleClick = (audio) => {
    document.getElementById(audio).currentTime = 0;
    document.getElementById(audio).play();
    setDisplay(audio);
  };

  window.onkeypress = (e) => {
    handleClick(e.key.toUpperCase());
  };
  

  return (
    <div className="App">
      <div id='drum-machine' className='container'>
        <div className="row justify-content-center">
          <div className='col-sm-12 col-md-6 col-lg-4'>
            <h1 id='display'>{display}</h1>
            <br />
            <div className="row g-0 row-cols-3">
            {pads.map((pad) => <Drumpad id={pad.id} src={pad.audio} handleClick={handleClick}>{pad.key}</Drumpad>)}
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p>Design and Coded by Candelaria Colombres Garmendia</p>
      </footer>
    </div>
  );
}

export default App;
