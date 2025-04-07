export function updatePlayerMovement(player, keys, field) {
    const speed = 3;
    let dx = 0, dy = 0;
    if (keys['w']) dy -= speed;
    if (keys['s']) dy += speed;
    if (keys['a']) dx -= speed;
    if (keys['d']) dx += speed;
  
    if (dx !== 0 && dy !== 0) {
      dx *= Math.SQRT1_2;
      dy *= Math.SQRT1_2;
    }
  
    player.x += dx;
    player.y += dy;
  
    player.x = Math.max(0, Math.min(field.width, player.x));
    player.y = Math.max(0, Math.min(field.height, player.y));
  
    return { dx, dy };
  }
  