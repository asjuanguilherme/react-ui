export type ButtonHeightToken = 'small' | 'medium' | 'large'

export type ButtonConfigTokenShape = 'pill' | 'rounded'

export type ButtonConfigToken = {
  shape: ButtonConfigTokenShape
  height: Record<ButtonHeightToken, string>
  borderRadius: string
}
