import Head from 'next/head'
import { About } from '@/modules/About'
import { Projects } from '@/modules/Projects'
import { useEffect } from 'react'
import { Cursor } from '@/components/Cursor'
import { Skills } from '@/modules/Skills'

export default function Home() {
  useEffect(() => {
    const element = document.querySelector("#container") as HTMLDivElement

    element.addEventListener('wheel', (event) => {
      event.preventDefault();

      element.scrollBy({
        left: event.deltaY < 0 ? -50 : 50,

      });
    });
  }, [])


  return (
    <>
      <Head>
        <title>Andrey Soares</title>
        <meta name="description" content="portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div id="container">
        <Cursor />
        <About />
        <Skills />
        <Projects />
        <svg className='noiseSvg'>
          <filter id='noiseFilter'>
            <feTurbulence
              type='fractalNoise'
              baseFrequency='0.5'
              stitchTiles='stitch' />
          </filter>
        </svg>
      </div >
    </>
  )
}
