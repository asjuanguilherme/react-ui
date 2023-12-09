export type ButtonHeightToken = 'small' | 'medium' | 'large'

export type ButtonConfigToken = {
  height: Record<ButtonHeightToken, string>
  borderRadius: string
}
