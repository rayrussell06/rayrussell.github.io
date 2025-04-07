export function getCameraOffset(toIsometric, ball, canvas) {
    const ballIso = toIsometric(ball.x, ball.y);
    return {
      offsetX: ballIso.x - canvas.width / 2,
      offsetY: ballIso.y - canvas.height / 2
    };
  }
  