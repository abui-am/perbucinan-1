import { useState, useEffect } from 'react';

const Snowflake = ({ id }: { id: number }) => {
  const [animationDelay, setAnimationDelay] = useState('0s');
  const [fontSize, setFontSize] = useState('10px');

  // random chance to flip snowflake
  const flip = Math.random() > 0.5 ? 'rotateY(180deg)' : 'rotateY(0deg)';
  const fliX = Math.random() > 0.5 ? 'rotateX(180deg)' : 'rotateX(0deg)';
  useEffect(() => {
    const generateSnowflake = () => {
      const newDelay = `${(Math.random() * 16).toFixed(2)}s`;
      const newFontSize = `${Math.floor(Math.random() * 10) + 10}px`;
      setAnimationDelay(newDelay);
      setFontSize(newFontSize);
    };

    generateSnowflake();
  }, []);

  const style = { animationDelay, fontSize };

  return (
    <p className='Snowflake' id={`item${id}`} style={style}>
      <img
        src='/kuromi.webp'
        alt='snowflake'
        width={36}
        style={{ transform: `${flip} ${fliX}` }}
      />
    </p>
  );
};

const Snow = () => {
  const [numFlakes] = useState(50);

  return (
    <div className='Snow'>
      {Array.from({ length: numFlakes }).map((_, i) => (
        <Snowflake key={i} id={i} />
      ))}
    </div>
  );
};

export default Snow;
