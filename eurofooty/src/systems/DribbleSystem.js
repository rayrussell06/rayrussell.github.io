export function updateBallPosition(ball, player, dx, dy) {
    const offset = 12;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance > 0) {
      ball.x = player.x + (dx / distance) * offset;
      ball.y = player.y + (dy / distance) * offset;
    } else {
      ball.x = player.x + offset;
      ball.y = player.y;
    }
  }
  