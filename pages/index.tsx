import type { NextPage } from 'next'
import Head from 'next/head'
import { useCallback, useState } from 'react'
import { FormTopics } from '../src/components/FormTopics'
import { Header } from '../src/components/Header'
import { Presets } from '../src/components/Presets'
import { Copy } from '../src/utils/Copy'
import { DiagramUtil, TShapedData } from '../src/utils/Diagram'
import { PresetUtil } from '../src/utils/Presets'

const Home: NextPage = () => {
  const [tShapes, setTShapes] = useState<TShapedData[]>([{ level: 0, topic: '' }])

  function addNewShape() {
    setTShapes((shapes) => [...shapes, { level: 0, topic: '' }])
  }

  function onLevelChange(position: number, event: React.ChangeEvent<HTMLSelectElement>) {
    event.preventDefault()

    setTShapes((shapes) => {
      shapes[position].level = Number(event.target.value) || 0
      return [...shapes]
    })
  }

  function onTopicChange(position: number, event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()

    setTShapes((shapes) => {
      shapes[position].topic = event.target.value
      return [...shapes]
    })
  }

  function onPresetClick() {
    setTShapes([...PresetUtil.getFrontendPreset()])
  }

  const handleCopyDiagram = useCallback(async () => {
    try {
      await Copy.textToClipboard(DiagramUtil.getXmlTShape(tShapes))
      alert('Copiado com sucesso')
    } catch (error) {
      console.error(error)
    }
  }, [tShapes])

  return (
    <>
      <Head>
        <title>T-shaped generator</title>
        <meta name="description" content="Gerador de t-shaped visual para app.diagrams" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container">
        <Presets onPresetClick={onPresetClick} />
        <FormTopics
          tShapes={tShapes}
          handleCopyDiagram={handleCopyDiagram}
          onTopicChange={onTopicChange}
          onLevelChange={onLevelChange}
          addNewShape={addNewShape}
        />
      </main>
    </>
  )
}

export default Home
