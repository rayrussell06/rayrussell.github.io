export function drawTile(ctx, img, x, y, toIsometric, offsetX, offsetY) {
    const iso = toIsometric(x, y);
    const drawX = iso.x - offsetX - img.width / 2;
    const drawY = iso.y - offsetY - img.height / 2;
    ctx.drawImage(img, drawX, drawY);
  }
  