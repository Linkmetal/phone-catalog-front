import { MobileIcon } from '@radix-ui/react-icons'
import { styled } from 'styles/stitches.config'

export const HeaderRoot = styled('header', {
  position: 'relative',
  width: '100%',
  height: '10%',
  backgroundColor: '$accentSolidHover',
})

export const MobileHeaderIcon = styled(MobileIcon, {
  size: '$8',
  color: '$accentTextContrast',
})
