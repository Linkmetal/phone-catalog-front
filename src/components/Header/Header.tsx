import { FlexContainer } from 'styles/common.styles'
import { HeaderRoot } from 'components/Header/Header.styles'
import { Typography } from 'components/Typography'

export const Header = () => {
  return (
    <HeaderRoot>
      <FlexContainer css={{ height: '100%', width: '100%' }}>
        <Typography size="h1" color="white-100">
          {'This is the header'}
        </Typography>
      </FlexContainer>
    </HeaderRoot>
  )
}

export default Header
