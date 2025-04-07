export function drawField(
  ctx,
  toIsometric,
  offsetX,
  offsetY,
  field,
  canvasWidth,
  canvasHeight
) {
  const tileSize = 64;
  const cols = Math.ceil(field.width / tileSize);
  const rows = Math.ceil(field.height / tileSize);

  const iso = (x, y) => {
    const p = toIsometric(x, y);
    return { x: p.x - offsetX, y: p.y - offsetY };
  };

  // === Define corners of court for clipping
  const corners = [
    iso(0, 0),
    iso(field.width, 0),
    iso(field.width, field.height),
    iso(0, field.height)
  ];

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(corners[0].x, corners[0].y);
  for (let i = 1; i < corners.length; i++) {
    ctx.lineTo(corners[i].x, corners[i].y);
  }
  ctx.closePath();
  ctx.clip();

  // === Futsal court coloring (red & darker red stripes)
  for (let y = 0; y < rows; y++) {
    const useDark = y % 2 === 0;
    ctx.fillStyle = useDark ? '#b20000' : '#e03a3e';
  
    for (let x = 0; x < cols; x++) {
      const worldX = x * tileSize;
      const worldY = y * tileSize;
      const p = toIsometric(worldX, worldY);
  
      const top = { x: p.x - offsetX, y: p.y - offsetY };
      const right = toIsometric(worldX + tileSize, worldY);
      const bottom = toIsometric(worldX + tileSize, worldY + tileSize);
      const left = toIsometric(worldX, worldY + tileSize);
  
      ctx.beginPath();
      ctx.moveTo(top.x, top.y);
      ctx.lineTo(right.x - offsetX, right.y - offsetY);
      ctx.lineTo(bottom.x - offsetX, bottom.y - offsetY);
      ctx.lineTo(left.x - offsetX, left.y - offsetY);
      ctx.closePath();
      ctx.fill();
    }
  }
  

  ctx.restore();

  // === Field border
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(corners[0].x, corners[0].y);
  for (let i = 1; i < corners.length; i++) {
    ctx.lineTo(corners[i].x, corners[i].y);
  }
  ctx.closePath();
  ctx.stroke();

  // === Halfway line
  const halfY = field.height / 2;
  const midLeft = iso(0, halfY);
  const midRight = iso(field.width, halfY);
  ctx.beginPath();
  ctx.moveTo(midLeft.x, midLeft.y);
  ctx.lineTo(midRight.x, midRight.y);
  ctx.stroke();

  // === Center circle
  const center = toIsometric(field.width / 2, field.height / 2);
  ctx.beginPath();
  ctx.arc(center.x - offsetX, center.y - offsetY, 60, 0, Math.PI * 2);
  ctx.stroke();

  // === Penalty spots
  ctx.fillStyle = '#fff';
  const spotOffset = 100;
  const topSpot = iso(field.width / 2, spotOffset);
  const bottomSpot = iso(field.width / 2, field.height - spotOffset);
  ctx.beginPath(); ctx.arc(topSpot.x, topSpot.y, 3, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(bottomSpot.x, bottomSpot.y, 3, 0, Math.PI * 2); ctx.fill();

  // === Goals (same logic, left as-is)
  const draw3DGoal = (xStart, yFront, isTopGoal) => {
    const postWidth = 80, netDepth = 40, heightDepth = 30;
    const xEnd = xStart + postWidth;
    const yBack = isTopGoal ? yFront - netDepth : yFront + netDepth;

    const frontLeft = iso(xStart, yFront), frontRight = iso(xEnd, yFront);
    const backLeft = iso(xStart, yBack), backRight = iso(xEnd, yBack);

    const topLeft = { x: frontLeft.x - heightDepth, y: frontLeft.y - heightDepth };
    const topRight = { x: frontRight.x - heightDepth, y: frontRight.y - heightDepth };

    ctx.strokeStyle = '#fff';
    ctx.beginPath(); ctx.moveTo(frontLeft.x, frontLeft.y);
    ctx.lineTo(topLeft.x, topLeft.y);
    ctx.lineTo(topRight.x, topRight.y);
    ctx.lineTo(frontRight.x, frontRight.y);
    ctx.stroke();

    ctx.beginPath(); ctx.moveTo(frontLeft.x, frontLeft.y);
    ctx.lineTo(backLeft.x, backLeft.y);
    ctx.lineTo(backRight.x, backRight.y);
    ctx.lineTo(frontRight.x, frontRight.y);
    ctx.stroke();

    ctx.beginPath(); ctx.moveTo(topLeft.x, topLeft.y);
    ctx.lineTo(topLeft.x + (backLeft.x - frontLeft.x), topLeft.y + (backLeft.y - frontLeft.y));
    ctx.lineTo(topRight.x + (backRight.x - frontRight.x), topRight.y + (backRight.y - frontRight.y));
    ctx.lineTo(topRight.x, topRight.y);
    ctx.stroke();
  };

  draw3DGoal(field.width / 2 - 40, 0, true);
  draw3DGoal(field.width / 2 - 40, field.height, false);

  // === Penalty Boxes
  const boxWidth = 400, boxHeight = 200;
  const drawBox = (topY) => {
    const left = field.width / 2 - boxWidth / 2;
    const right = field.width / 2 + boxWidth / 2;
    const top = topY, bottom = top + boxHeight;

    ctx.beginPath();
    ctx.moveTo(iso(left, top).x, iso(left, top).y);
    ctx.lineTo(iso(right, top).x, iso(right, top).y);
    ctx.lineTo(iso(right, bottom).x, iso(right, bottom).y);
    ctx.lineTo(iso(left, bottom).x, iso(left, bottom).y);
    ctx.closePath();
    ctx.stroke();
  };

  drawBox(0);
  drawBox(field.height - boxHeight);
}
