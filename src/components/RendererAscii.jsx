import dynamic from "next/dynamic";
import { useCallback } from "react";

const RendererAscii = (
  p5,
  input, // the input P5 Element
  fontSize, // the font size
  chars, // the charset to use
  tilesX, // the amount of cols
  tilesY, // the amount of rows
  spread, // the magnitude of the grid from the center
  bg, // the background-color
  fg // the foreground-color
) => {
  let pg;
  let colors = ["#ff0000", "#ffa500", "#ffff00", "#008000"];

  pg = p5.createGraphics(p5.width, p5.height);
  pg.background(bg);
  pg.fill(fg);
  pg.noStroke();

  let tileW = p5.width / tilesX;
  let tileH = p5.height / tilesY;

  pg.fill(0);
  pg.textSize(fontSize);
  pg.textAlign(p5.CENTER, p5.CENTER);
  pg.translate(p5.width / 2, p5.height / 2);

  let buffer = input.get();

  for (let x = 0; x < tilesX; x++) {
    for (let y = 0; y < tilesY; y++) {
      let px = p5.int(x * tileW);
      let py = p5.int(y * tileH);
      let c = buffer.get(px, py);

      let ch = chars.charAt(
        p5.int(p5.map(p5.brightness(c), 0, 100, 0, chars.length - 1))
      );

      let color =
        colors[p5.int(p5.map(p5.brightness(c), 0, 100, 0, colors.length - 1))];

      let posX = p5.map(x, 0, tilesX, -spread, spread);
      let posY = p5.map(y, 0, tilesY, -spread, spread);

      pg.push();
      pg.translate(posX, posY);
      pg.fill(fg);

      pg.text(ch, 0, 0);
      pg.pop();
    }
  }
  p5.image(pg, 0, 0);
  pg.remove();
};

export default RendererAscii;
