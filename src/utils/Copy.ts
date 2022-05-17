const textToClipboard = async (text: string) => {
  return navigator.clipboard.writeText(text)
}
export const Copy = {
  textToClipboard,
}
