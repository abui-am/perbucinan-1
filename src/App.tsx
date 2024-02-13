import './App.css';
import CanvasAnimation from './components/FallingAnimation';

function App() {
  return (
    <>
      <CanvasAnimation />
      <div
        className='title'
        style={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          zIndex: 100,
          fontWeight: 900,
          color: 'white',
        }}
      >
        <img src='/kuromianimation.gif' alt='kuromi' width={200} />
        <h1
          style={{
            marginBlockStart: 0,
            marginBlockEnd: 0,
          }}
        >
          Happy Valentine Cacaa
        </h1>

        <h2
          style={{
            fontSize: 42,
            marginBlockStart: 0,
            marginBlockEnd: 0,
          }}
        >
          -a
        </h2>
      </div>
    </>
  );
}

export default App;
