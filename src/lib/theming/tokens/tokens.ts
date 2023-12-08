import { BlurRadiusToken } from './blurRadiusToken'
import { BorderRadiusToken } from './borderRadius'
import { ContainerToken } from './container'
import { FieldSizesToken } from './fieldSizes'
import { FontSizesToken } from './fontSizes'
import { FontWeightsToken } from './fontWeights'
import { SpacingToken } from './spacing'
import { TransitionDurationsToken } from './transition'
import { ZIndexToken } from './ZIndex'

export type ThemeTokens = {
  blurRadius: BlurRadiusToken
  borderRadius: BorderRadiusToken
  container: ContainerToken
  fieldSizes: FieldSizesToken
  fontSizes: FontSizesToken
  fontWeights: FontWeightsToken
  spacing: SpacingToken
  transitionDurations: TransitionDurationsToken
  zIndex: ZIndexToken
}
