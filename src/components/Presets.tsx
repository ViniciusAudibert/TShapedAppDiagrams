interface Props {
  onPresetClick: (event: React.MouseEventHandler<HTMLButtonElement>) => void
}

export const Presets = ({ onPresetClick }: Props) => (
  <>
    <label className="mt-3 w-100">Presets:</label>
    <button onClick={onPresetClick} type="button" className="btn btn-info mt-1">
      Frontend
    </button>
  </>
)
