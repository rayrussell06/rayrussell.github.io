// TileMap.js
export function generateTileMap(rows, cols) {
    const tiles = [];
  
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        tiles.push({ x, y, type: 'grass' }); // we can extend this later
      }
    }
  
    return tiles;
  }
  