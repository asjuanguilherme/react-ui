import { capitalizeFirstLetter } from '@asjuanguilherme/js-utils'

export type FontFamily = {
  filePrefix: string
  fileExtension: string
  format: string
  name: string
  weights: {
    [key: string]: number
  }
}

export const generateFontFaces = (fontFamily: FontFamily): string => {
  return Object.entries(fontFamily.weights)
    .map(
      ([weight, weightValue]) => `
        @font-face {
          font-family: '${fontFamily.name}';
          font-weight: ${weightValue};
          font-style: normal;
          src: local('${fontFamily.name} ${capitalizeFirstLetter(weight)}'),
            url(
              ./fonts/assets/${fontFamily.filePrefix}${weightValue}${
        fontFamily.fileExtension
      }
            )
              format('${fontFamily.format}');
        }
      `,
    )
    .join('\n')
}
