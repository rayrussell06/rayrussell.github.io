export function drawEntity(ctx, entity, toIsometric, offsetX, offsetY) {
    const { x, y } = toIsometric(entity.x, entity.y);
    ctx.fillStyle = entity.color;
    ctx.beginPath();
    ctx.arc(x - offsetX, y - offsetY, entity.radius, 0, 2 * Math.PI);
    ctx.fill();
  }
  