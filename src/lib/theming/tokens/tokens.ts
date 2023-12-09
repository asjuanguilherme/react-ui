import { BlurRadiusToken } from './blurRadiusToken'
import { BorderRadiusToken } from './borderRadius'
import { ButtonConfigToken } from './buttonConfig'
import { ContainerToken } from './container'
import { FieldConfigToken } from './fieldConfig'
import { FontSizesToken } from './fontSizes'
import { FontWeightsToken } from './fontWeights'
import { SpacingToken } from './spacing'
import { TransitionDurationsToken } from './transition'
import { ZIndexToken } from './ZIndex'

export type ThemeTokens = {
  blurRadius: BlurRadiusToken
  borderRadius: BorderRadiusToken
  container: ContainerToken
  button: ButtonConfigToken
  field: FieldConfigToken
  fontSizes: FontSizesToken
  fontWeights: FontWeightsToken
  spacing: SpacingToken
  transitionDurations: TransitionDurationsToken
  zIndex: ZIndexToken
}
