import { HeaderRoot, MobileHeaderIcon } from 'components/Header/Header.styles'

import { FlexContainer } from 'styles/common.styles'
import { Typography } from 'components/Typography'

export const Header = () => {
  return (
    <HeaderRoot>
      <FlexContainer css={{ height: '100%', width: '100%' }}>
        <MobileHeaderIcon />
        <Typography weight="extraBold" color="accentTextContrast" size="h2">
          PHONE CATALOG
        </Typography>
      </FlexContainer>
    </HeaderRoot>
  )
}

export default Header
