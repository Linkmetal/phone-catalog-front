import {
  BlendingModeIcon,
  BoxModelIcon,
  MagicWandIcon,
  MobileIcon,
  RulerSquareIcon,
  ShadowInnerIcon,
} from '@radix-ui/react-icons'
import { DetailField, DetailsGridContainer } from './PhoneDetail.styles'
import { FlexContainer, Img, Layout } from 'styles/common.styles'

import { Header } from 'components/Header'
import { PhoneDetailRoot } from 'screens/PhoneDetail/PhoneDetail.styles'
import { Toolbar } from 'components/Toolbar'
import { Typography } from 'components/Typography'
import { darkTheme } from 'styles/stitches.config'
import { useFetchPhoneDetails } from 'hooks/queries/useFetchPhoneDetails'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useTitle } from 'ahooks'

export const PhoneDetail = () => {
  const [isDarkThemeSetted, setIsDarkThemeSetted] = useState<boolean>(false)
  const params = useParams()
  const { phone } = useFetchPhoneDetails({ id: params?.id || '' }, { enabled: !!params?.id })
  useTitle(`Phone Catalog - ${phone?.name}`)

  if (!phone) return null
  return (
    <PhoneDetailRoot className={isDarkThemeSetted ? darkTheme : undefined}>
      <Layout>
        <Header />
        <Toolbar isDarkThemeSetted={isDarkThemeSetted} onThemeChange={setIsDarkThemeSetted} />
        <DetailsGridContainer>
          <FlexContainer direction="column" css={{ height: '85%', backgroundColor: '$whiteA11' }} justify="start">
            <Img
              // TODO: remove this image validation
              src={phone.imageFileName.startsWith('http') ? phone.imageFileName : '/placeholder.png'}
              role="presentation"
              css={{ padding: '$4' }}
            />
            <DetailField
              justify="start"
              direction="column"
              css={{
                backgroundColor: '$accentBgHover',
                width: '100%',
                height: '50%',
                padding: '$4',
              }}
            >
              <Typography css={{ paddingBottom: '$4' }} size="h3">
                Description:
              </Typography>
              <Typography color="accentTextContrast" size="h5">
                {phone.description}
              </Typography>
            </DetailField>
          </FlexContainer>
          <FlexContainer
            css={{ padding: '$8', backgroundColor: '$accentBgHover', height: '85%' }}
            justify="start"
            align="start"
            direction="column"
          >
            <DetailField>
              <MobileIcon />
              <Typography css={{ paddingRight: '$4' }} size="h3">
                Name:
              </Typography>
              <Typography color="accentTextContrast" size="h3">
                {phone.name}
              </Typography>
            </DetailField>
            <DetailField>
              <MagicWandIcon />
              <Typography css={{ paddingRight: '$4' }} size="h3">
                Manufacturer:
              </Typography>
              <Typography color="accentTextContrast" size="h3">
                {phone.manufacturer}
              </Typography>
            </DetailField>
            <DetailField>
              <BoxModelIcon />
              <Typography css={{ paddingRight: '$4' }} size="h3">
                Processor:
              </Typography>
              <Typography color="accentTextContrast" size="h3">
                {phone.processor}
              </Typography>
            </DetailField>
            <DetailField>
              <BoxModelIcon />
              <Typography css={{ paddingRight: '$4' }} size="h3">
                RAM Memory:
              </Typography>
              <Typography color="accentTextContrast" size="h3">
                {phone.ram}
              </Typography>
            </DetailField>
            <DetailField>
              <RulerSquareIcon />
              <Typography css={{ paddingRight: '$4' }} size="h3">
                Screen:
              </Typography>
              <Typography color="accentTextContrast" size="h3">
                {phone.screen}
              </Typography>
            </DetailField>
            <DetailField>
              <BlendingModeIcon />
              <Typography css={{ paddingRight: '$4' }} size="h3">
                Color:
              </Typography>
              <Typography color="accentTextContrast" size="h3">
                {phone.color}
              </Typography>
            </DetailField>
            <DetailField>
              <ShadowInnerIcon />
              <Typography css={{ paddingRight: '$4' }} size="h3">
                Price:
              </Typography>
              <Typography color="accentTextContrast" size="h3">
                {phone.price} €
              </Typography>
            </DetailField>
          </FlexContainer>
        </DetailsGridContainer>
      </Layout>
    </PhoneDetailRoot>
  )
}

PhoneDetail.displayName = 'PhoneDetail'
