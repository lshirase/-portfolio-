import RendererAscii from '@/components/RendererAscii'
import dynamic from 'next/dynamic'
import { useCallback } from 'react'

let scene
let images = []
let counter = 0

const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})

const AsciiSketch1 = (props) => {
  const preload = (p5) => {
    // images[1] = p5.loadImage("./tiger.jpg");

    images[1] = {
      img: p5.loadImage('./magic.jpg'),
      charset: '*1+3-4^5>6<7~8=9 ',
      bg: '#552583',
      fg: '#FFFF00',
      rows: 90,
      cols: 90,
      scale1: 0.85,
      scale2: 0.9,
    }
    images[2] = {
      img: p5.loadImage('./tulip.jpg'),
      charset: '*1+3-4^5>6<7~8=9 ',
      bg: '#25fd00',
      fg: 'black',
      rows: 90,
      cols: 90,
      scale1: 0.99,
      scale2: 1.0,
    }
    images[3] = {
      img: p5.loadImage('./dinho.jpg'),
      charset: '▗A▘0▜B▟1▙C▄2▀D▐3▌E▞4▚F▝5',
      bg: '#A50044',
      fg: '#004D98',
      rows: 90,
      cols: 90,
      scale1: 0.99,
      scale2: 1.0,
    }
    images[4] = {
      img: p5.loadImage('./tiger.jpg'),
      charset: ' ._▂▃▄▀▀▅▆▇░░▒▓█░',
      bg: 'white',
      fg: '#BC002D',
      rows: 90,
      cols: 90,
      scale1: 0.99,
      scale2: 1.0,
    }

    p5.disableFriendlyErrors = true // disables FES
  }

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(650, 650).parent(canvasParentRef)
    scene = p5.createGraphics(p5.width, p5.height)
    // p5.frameRate(60);
  }

  const draw = useCallback((p5) => {
    images[Object.keys(images)[counter]].img.resize(p5.width, p5.height)

    scene.push()
    scene.translate(p5.width / 2, p5.height / 2)
    // scene.scale(p5.map(p5.sin(p5.radians(p5.frameCount * 2)), -1, 1, 0, 2));
    // scene.scale(p5.map(p5.sin(p5.radians(p5.frameCount * 2)), -1, 1, 0, 2));
    // let scale = p5.map(Math.sin(p5.frameCount / 10), -1, 1, 0.94, 0.95);
    let scale = p5.map(
      Math.sin(p5.frameCount / 10),
      -1,
      1,
      images[Object.keys(images)[counter]].scale1,
      images[Object.keys(images)[counter]].scale2
    )

    scene.scale(scale)
    scene.imageMode(p5.CENTER)
    scene.image(images[Object.keys(images)[counter]].img, 0, 0)
    scene.pop()
    p5.image(scene, 0, p5.height / 2)
    RendererAscii(
      p5,
      scene, // Input P5 Element
      p5.height / 100, // font size
      images[Object.keys(images)[counter]].charset, // character set
      images[Object.keys(images)[counter]].cols, // cols
      images[Object.keys(images)[counter]].rows, // rows
      p5.width * 0.3, // spread
      images[Object.keys(images)[counter]].bg, // background color
      images[Object.keys(images)[counter]].fg // foreground color
    )
    // if (scale <= 0.016) {
    //   counter = (counter + 1) % Object.keys(images).length;
    // }
  }, [])

  const mouseClicked = (p5, event) => {
    scene.clear()

    scene.remove()

    counter = (counter + 1) % Object.keys(images).length
  }

  return (
    <>
      <Sketch
        setup={setup}
        draw={draw}
        preload={preload}
        mouseClicked={mouseClicked}
      />
    </>
  )
}

export default AsciiSketch1
