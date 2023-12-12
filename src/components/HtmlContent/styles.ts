import styled from 'styled-components'

export const Wrapper = styled.div`
  line-height: 2em;
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${props => props.theme.fontWeights.regular};

  p,
  ul,
  ol {
    margin-bottom: 1.5em;
  }

  strong {
    font-weight: ${props => props.theme.fontWeights.regular};
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${props => props.theme.colors.content.title};
    font-size: ${props => props.theme.fontSizes.medium};
    font-weight: ${props => props.theme.fontWeights.bold};
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
`
