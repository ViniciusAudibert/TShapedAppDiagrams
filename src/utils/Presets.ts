import { TShapedData } from './Diagram'

const getFrontendPreset = (): TShapedData[] => [
  { level: 0, topic: 'Git' },
  { level: 0, topic: 'Pack Manager' },
  { level: 0, topic: 'Module Bundler' },
  { level: 0, topic: 'Web Security' },
  { level: 0, topic: 'Web Components' },
  { level: 0, topic: 'HTML' },
  { level: 0, topic: 'NextJs' },
  { level: 0, topic: 'Javascript' },
  { level: 0, topic: 'React' },
  { level: 0, topic: 'Jest' },
  { level: 0, topic: 'React Testing Library' },
]

export const PresetUtil = {
  getFrontendPreset,
}
