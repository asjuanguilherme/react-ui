import { mergeObjects } from '@asjuanguilherme/js-utils'

import { defaultThemeTokens } from './defaultThemeTokens'
import { ThemeTokens } from './tokens'

export const constructThemeTokens = (
  customTokens?: Partial<ThemeTokens>,
): ThemeTokens => {
  return mergeObjects(defaultThemeTokens, customTokens)
}
