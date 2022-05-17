import React from 'react'
import { TShapedData } from '../utils/Diagram'

interface Props {
  tShapes: TShapedData[]
  handleCopyDiagram: () => void
  onTopicChange: (position: number, event: React.ChangeEvent<HTMLInputElement>) => void
  onLevelChange: (position: number, event: React.ChangeEvent<HTMLSelectElement>) => void
  addNewShape: () => void
}

export const FormTopics = (props: Props) => {
  const { tShapes, handleCopyDiagram, onTopicChange, onLevelChange, addNewShape } = props

  return (
    <form className="mt-3">
      {tShapes.map((tShape, index) => (
        <div className="row align-items-end" key={index}>
          <div className="col-4">
            <label htmlFor="formGroupLevel" className="form-label">
              Level
            </label>
            <select className="form-select" id={`formGroupLevel-${index}`} value={tShape.level} onChange={(e) => onLevelChange(index, e)}>
              <option value="0">0 (Pouco ou nada)</option>
              <option value="1">1 (Só o básico)</option>
              <option value="2">2 (Me viro bem)</option>
              <option value="3">3 (Alto conhecimento)</option>
              <option value="4">4 (Sou uma referencia)</option>
            </select>
          </div>

          <div className="col-4">
            <label htmlFor="formGroupTopic" className="form-label">
              Tópico
            </label>
            <input
              type="text"
              className="form-control"
              id={`formGroupTopic-${index}`}
              value={tShape.topic}
              onChange={(e) => onTopicChange(index, e)}
              placeholder="Digite o tópico"
            />
          </div>

          {index === tShapes.length - 1 && (
            <div className="col">
              <button type="button" className="btn btn-success" onClick={addNewShape}>
                Add
              </button>
            </div>
          )}
        </div>
      ))}

      <div className="col-12 mt-3">
        <button type="button" className="btn btn-success" onClick={handleCopyDiagram}>
          Copiar Diagrama
        </button>
      </div>
    </form>
  )
}
