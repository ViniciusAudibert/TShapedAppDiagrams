export interface TShapedData {
  level: number
  topic: string
}

const getXmlTShape = (tShapes: TShapedData[]) => {
  const components = [...getTShapesSumary()]

  const mapLevelToCell = {
    0: getLowShape,
    1: getBasicShape,
    2: getIntermediateShape,
    3: getAdvancedShape,
    4: getSpecialistShape,
  }

  const sortedTShapes = sortShapes(tShapes)

  sortedTShapes.forEach((c, position) => {
    components.push(
      mapLevelToCell[c.level as keyof typeof mapLevelToCell]({
        text: c.topic,
        position: position + 35,
      })
    )
  })

  const template = getTemplate(components.join(''))
  return encodeURIComponent(template)
}

const sortShapes = (tShapes: TShapedData[]) => {
  const low = tShapes.filter((s) => s.level === 0)
  const basic = tShapes.filter((s) => s.level === 1)
  const intermediate = tShapes.filter((s) => s.level === 2)
  const advanced = tShapes.filter((s) => s.level === 3)
  const specialist = tShapes.filter((s) => s.level === 4)

  const fromLevelLowToHight = [low, basic, intermediate, advanced, specialist]
  const sortedShapes: TShapedData[] = []

  let nextLevel = getNextLevel(fromLevelLowToHight)
  let nextLevelOriginalLength = nextLevel?.length

  while (nextLevel?.length) {
    const nextShape = nextLevel.pop()
    if (!nextShape) {
      nextLevel = getNextLevel(fromLevelLowToHight)
      nextLevelOriginalLength = nextLevel?.length

      break
    }

    if (!nextLevel || !nextShape) break

    if (nextLevelOriginalLength && nextLevel.length < Math.floor(nextLevelOriginalLength / 2)) {
      sortedShapes.push(nextShape)
    } else {
      sortedShapes.unshift(nextShape)
    }

    if (!nextLevel?.length) {
      nextLevel = getNextLevel(fromLevelLowToHight)
      nextLevelOriginalLength = nextLevel?.length
    }
  }

  return sortedShapes
}

const getTShapesSumary = () => {
  const width = 42
  return [
    getLowShape({ position: 1, text: 'Nada ou Pouco', width }),
    getBasicShape({ position: 2, text: 'Basico', width }),
    getIntermediateShape({ position: 3, text: 'Intermediario', width }),
    getSpecialistShape({ position: 4, text: 'Especialista', width }),
    getIntermediateShape({ position: 5, text: 'Intermediario', width }),
    getBasicShape({ position: 6, text: 'Basico', width }),
    getLowShape({ position: 7, text: 'Nada ou Pouco', width }),
  ]
}

const getNextLevel = (fromLevelLowToHight: TShapedData[][]) => {
  return fromLevelLowToHight.pop()
}

const getTemplate = (content: string) => {
  return `<mxGraphModel>
          <root><mxCell id="0"/><mxCell id="1" parent="0"/>
              ${content}
          </root>
        </mxGraphModel>`.replace(/  |\r\n|\n|\r/gm, '')
}

interface GetCellParams {
  position: number
  height: number
  width?: number
  fillColor: string
  strokeColor: string
  text: string
}

const getCell = ({ position, height, width, fillColor, strokeColor, text }: GetCellParams) => {
  const widthDefautl = width || 22
  const x = (position + 1) * (widthDefautl + 8)

  return `
    <mxCell id="${
      position + 2
    }" value="${text}" style="rounded=0;whiteSpace=wrap;html=1;horizontal=0;fillColor=${fillColor};strokeColor=${strokeColor};fontFamily=Open Sans;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DOpen%2BSans;fontStyle=1" vertex="1" parent="1">
        <mxGeometry x="${x}" y="40" width="${widthDefautl}" height="${height}" as="geometry" />
    </mxCell>`
}

const getLowShape = ({ position, text, width }: { position: number; text: string; width?: number }) => {
  return getCell({
    position,
    text,
    height: 90,
    strokeColor: '#525252',
    fillColor: '#C5C5C5',
    width,
  })
}

const getBasicShape = ({ position, text, width }: { position: number; text: string; width?: number }) => {
  return getCell({
    position,
    text,
    height: 186,
    strokeColor: '#d6b656',
    fillColor: '#fff2cc',
    width,
  })
}

const getIntermediateShape = ({ position, text, width }: { position: number; text: string; width?: number }) => {
  return getCell({
    position,
    text,
    height: 272,
    strokeColor: '#82b366',
    fillColor: '#d5e8d4',
    width,
  })
}

const getAdvancedShape = ({ position, text, width }: { position: number; text: string; width?: number }) => {
  return getCell({
    position,
    text,
    height: 417,
    strokeColor: '#6c8ebf',
    fillColor: '#dae8fc',
    width,
  })
}

const getSpecialistShape = ({ position, text, width }: { position: number; text: string; width?: number }) => {
  return getCell({
    position,
    text,
    height: 490,

    strokeColor: '#9673a6',
    width,
    fillColor: '#e1d5e7',
  })
}

export const DiagramUtil = {
  getXmlTShape,
}
