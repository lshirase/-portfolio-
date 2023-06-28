import dynamic from 'next/dynamic'
import { useCallback } from 'react'

// const RendererAscii = (
//   p5,
//   input, // the input P5 Element
//   fontSize, // the font size
//   chars, // the charset to use
//   tilesX, // the amount of cols
//   tilesY, // the amount of rows
//   spread, // the magnitude of the grid from the center
//   bg, // the background-color
//   fg // the foreground-color
// ) => {
//   let pg
//   let colors = ['#ff0000', '#ffa500', '#ffff00', '#008000']

//   pg = p5.createGraphics(p5.width, p5.height)
//   pg.background(bg)
//   pg.fill(fg)
//   pg.noStroke()

//   let tileW = p5.width / tilesX
//   let tileH = p5.height / tilesY

//   pg.fill(0)
//   pg.textSize(fontSize)
//   pg.textAlign(p5.CENTER, p5.CENTER)
//   pg.translate(p5.width / 2, p5.height / 2)

//   let buffer = input.get()

//   for (let x = 0; x < tilesX; x++) {
//     for (let y = 0; y < tilesY; y++) {
//       let px = p5.int(x * tileW)
//       let py = p5.int(y * tileH)
//       let c = buffer.get(px, py)

//       let ch = chars.charAt(
//         p5.int(p5.map(p5.brightness(c), 0, 100, 0, chars.length - 1))
//       )

//       let color =
//         colors[p5.int(p5.map(p5.brightness(c), 0, 100, 0, colors.length - 1))]

//       let posX = p5.map(x, 0, tilesX, -spread, spread)
//       let posY = p5.map(y, 0, tilesY, -spread, spread)

//       pg.push()
//       pg.translate(posX, posY)
//       pg.fill(fg)

//       pg.text(ch, 0, 0)
//       pg.pop()
//     }
//   }
//   p5.image(pg, 0, 0)
//   pg.remove()
// }

// export default RendererAscii

// const RendererAscii = (
//   p5,
//   input, // the input P5 Element
//   fontSize, // the font size
//   chars, // the charset to use
//   tilesX, // the amount of cols
//   tilesY, // the amount of rows
//   spread, // the magnitude of the grid from the center
//   bg, // the background-color
//   fg // the foreground-color
// ) => {
//   const pg = p5.createGraphics(p5.width, p5.height)
//   pg.background(bg)
//   pg.fill(fg)
//   pg.noStroke()

//   const tileW = p5.width / tilesX
//   const tileH = p5.height / tilesY

//   pg.fill(0)
//   pg.textSize(fontSize)
//   pg.textAlign(p5.CENTER, p5.CENTER)
//   pg.translate(p5.width / 2, p5.height / 2)

//   const buffer = input.get()

//   const colors = ['#ff0000', '#ffa500', '#ffff00', '#008000']

//   for (let y = 0; y < tilesY; y++) {
//     for (let x = 0; x < tilesX; x++) {
//       const px = p5.int(x * tileW)
//       const py = p5.int(y * tileH)
//       const c = buffer.get(px, py)

//       const brightnessValue = p5.brightness(c)
//       const chIndex = p5.int(
//         p5.map(brightnessValue, 0, 100, 0, chars.length - 1)
//       )
//       const ch = chars.charAt(chIndex)

//       const colorIndex = p5.int(
//         p5.map(brightnessValue, 0, 100, 0, colors.length - 1)
//       )
//       const color = colors[colorIndex]

//       const posX = p5.map(x, 0, tilesX, -spread, spread)
//       const posY = p5.map(y, 0, tilesY, -spread, spread)

//       pg.push()
//       pg.translate(posX, posY)
//       pg.fill(color)
//       pg.text(ch, 0, 0)
//       pg.pop()
//     }
//   }

//   p5.image(pg, 0, 0)
//   pg.remove()
// }

// export default RendererAscii

// function RendererAscii(
//   imageSrc,
//   canvasId,
//   fontSize,
//   chars,
//   tilesX,
//   tilesY,
//   spread,
//   bg,
//   fg
// ) {
//   const canvas = document.getElementById(canvasId)
//   const image = new Image()
//   image.src = imageSrc
//   image.onload = () => {
//     const ctx = canvas.getContext('2d')
//     ctx.clearRect(0, 0, canvas.width, canvas.height)

//     const tileW = Math.floor(canvas.width / tilesX)
//     const tileH = Math.floor(canvas.height / tilesY)

//     const bufferCanvas = document.createElement('canvas')
//     bufferCanvas.width = image.width
//     bufferCanvas.height = image.height
//     const bufferCtx = bufferCanvas.getContext('2d')
//     bufferCtx.drawImage(image, 0, 0)
//     const buffer = bufferCtx.getImageData(0, 0, image.width, image.height).data

//     const colors = ['#ff0000', '#ffa500', '#ffff00', '#008000']

//     for (let y = 0; y < tilesY; y++) {
//       for (let x = 0; x < tilesX; x++) {
//         const px = Math.floor(x * tileW)
//         const py = Math.floor(y * tileH)
//         const index = (py * image.width + px) * 4

//         const r = buffer[index]
//         const g = buffer[index + 1]
//         const b = buffer[index + 2]
//         const brightnessValue = (r + g + b) / 3

//         const chIndex = Math.floor(
//           customMap(brightnessValue, 0, 255, 0, chars.length - 1)
//         )
//         const ch = chars.charAt(chIndex)

//         const colorIndex = Math.floor(
//           customMap(brightnessValue, 0, 255, 0, colors.length - 1)
//         )
//         const color = colors[colorIndex]

//         const posX = customMap(x, 0, tilesX, -spread, spread)
//         const posY = customMap(y, 0, tilesY, -spread, spread)

//         ctx.save()
//         ctx.translate(canvas.width / 2 + posX, canvas.height / 2 + posY)
//         ctx.fillStyle = color
//         ctx.font = `${fontSize}px monospace`
//         ctx.textBaseline = 'middle'
//         ctx.textAlign = 'center'
//         ctx.fillText(ch, 0, 0)
//         ctx.restore()
//       }
//     }
//   }

//   function customMap(value, start1, stop1, start2, stop2) {
//     return start2 + ((stop2 - start2) * (value - start1)) / (stop1 - start1)
//   }
// }

// export default RendererAscii

const RendererAscii = (
  p5,
  input, // the input P5 Element
  fontSize, // the font size
  chars, // the charset to use
  tilesX, // the amount of cols
  tilesY, // the amount of rows
  spread, // the magnitude of the grid from the center
  bg, // the background-color
  fg, // the foreground-color
  colorp // the color palette
) => {
  let pg
  let colors = colorp

  pg = p5.createGraphics(p5.width, p5.height)
  pg.background(bg)
  pg.fill(fg)
  pg.noStroke()

  let tileW = p5.width / tilesX
  let tileH = p5.height / tilesY

  pg.fill(0)
  pg.textSize(fontSize)
  pg.textAlign(p5.CENTER, p5.CENTER)
  pg.translate(p5.width / 2, p5.height / 2)

  input.loadPixels()
  let buffer = input.pixels

  for (let x = 0; x < tilesX; x++) {
    for (let y = 0; y < tilesY; y++) {
      let px = p5.int(x * tileW)
      let py = p5.int(y * tileH)
      let index = (py * input.width + px) * 4

      let r = buffer[index]
      let g = buffer[index + 1]
      let b = buffer[index + 2]
      let c = p5.color(r, g, b)

      let ch = chars.charAt(
        p5.int(p5.map(p5.brightness(c), 0, 100, 0, chars.length - 1))
      )

      let color =
        colors[p5.int(p5.map(p5.brightness(c), 0, 100, 0, colors.length - 1))]

      let posX = p5.map(x, 0, tilesX, -spread, spread)
      let posY = p5.map(y, 0, tilesY, -spread, spread)

      pg.push()
      pg.translate(posX, posY)
      pg.fill(color)

      pg.text(ch, 0, 0)
      pg.pop()
    }
  }
  p5.image(pg, 0, 0)
  pg.remove()
}

export default RendererAscii
