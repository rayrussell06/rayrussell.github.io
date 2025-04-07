import { useEffect, useRef, useState } from 'react';
import { createPlayer } from '../entities/Player';
import { createBall } from '../entities/Ball';
import { updatePlayerMovement } from '../systems/PlayerMovementSystem';
import { updateBallPosition } from '../systems/DribbleSystem';
import { getCameraOffset } from '../systems/CameraSystem';
import { drawField } from '../components/FieldRenderer';
import { drawEntity } from '../components/EntityRenderer';

export default function SoccerGame() {
  const canvasRef = useRef(null);
  const keysRef = useRef({});
  const [tilesLoaded, setTilesLoaded] = useState(false);
  const [grassLight, setGrassLight] = useState(null);
  const [grassDark, setGrassDark] = useState(null);

  const player = useRef(createPlayer(800, 500));
  const ball = useRef(createBall(820, 500));

  const field = {
    width: 1600,
    height: 2000,
  };

  const toIsometric = (x, y) => ({
    x: (x - y),
    y: (x + y) / 2
  });
  
  function scaleImageToTileSize(image, size = 64) {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, size, size);
    const scaled = new Image();
    scaled.src = canvas.toDataURL();
    return scaled;
  }
  
  useEffect(() => {
    const light = new Image();
    const dark = new Image();
  
    light.src = '/FieldTextures/grass.png';
    dark.src = '/FieldTextures/darkgrass.png';
  
    Promise.all([
      new Promise((resolve) => light.onload = resolve),
      new Promise((resolve) => dark.onload = resolve)
    ]).then(() => {
      setGrassLight(scaleImageToTileSize(light));
      setGrassDark(scaleImageToTileSize(dark));
      setTilesLoaded(true);
    });
  }, []);
  

  useEffect(() => {
    if (!tilesLoaded) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const handleKeyDown = (e) => keysRef.current[e.key.toLowerCase()] = true;
    const handleKeyUp = (e) => keysRef.current[e.key.toLowerCase()] = false;

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    const loop = () => {
      const { dx, dy } = updatePlayerMovement(player.current, keysRef.current, field);
      updateBallPosition(ball.current, player.current, dx, dy);

      const { offsetX, offsetY } = getCameraOffset(toIsometric, ball.current, canvas);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawField(ctx, toIsometric, offsetX, offsetY, field, canvas.width, canvas.height, grassLight, grassDark);
      drawEntity(ctx, ball.current, toIsometric, offsetX, offsetY);
      drawEntity(ctx, player.current, toIsometric, offsetX, offsetY);

      requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [tilesLoaded]);

  return (
    <canvas
      ref={canvasRef}
      width={1200}
      height={800}
      style={{
        display: 'block',
        margin: '40px auto',
        border: '2px solid white',
        backgroundColor: '#228B22',
      }}
    />
  );
}
