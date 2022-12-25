import { useRef, useEffect } from 'react';
import Card from '../../components/Card/Card';
import './App.scss';
import useInitData from '../../hooks/useInitData';

function App() {
  useInitData();
  const videoEl = useRef<HTMLVideoElement>(null);


  return (
    <div className="App">
      <div className='hero-bg-container'>
        <div className='video-container'>
          <video ref={videoEl} className='video-bg' loop autoPlay muted>
            <source
              src={require('../../assets/fifa-trailer.mp4')}
              type="video/mp4"
            />Your browser does not support the video tag. I suggest you upgrade your browser.
          </video>
        </div>

        <div className='overlay'>
          <Card
            cardTitle='Players'
            redirectTo='players'
            animationDelay={0}
          />
          <Card
            cardTitle='Teams'
            redirectTo='teams'
            animationDelay={0.6}
          />
          <Card
            cardTitle='History'
            redirectTo='history'
            animationDelay={0.3}
          />
        </div>
      </div>
    </div>
  );
}

export default App;