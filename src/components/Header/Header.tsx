import { FlexContainer } from 'styles/common.styles'
import { HeaderRoot } from 'components/Header/Header.styles'
import { Typography } from 'components/Typography'

export const Header = () => {
  return (
    <HeaderRoot>
      <FlexContainer css={{ height: '100%', width: '100%' }}>
        <Typography weight="extraBold" color="accentTextContrast" size="h1">
          PHONE CATALOG
        </Typography>
      </FlexContainer>
    </HeaderRoot>
  )
}

export default Header
