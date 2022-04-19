import {
  BlendingModeIcon,
  BoxModelIcon,
  ChevronLeftIcon,
  MagicWandIcon,
  MobileIcon,
  RulerSquareIcon,
  ShadowInnerIcon,
} from '@radix-ui/react-icons'
import { Button, FlexContainer, Img, Layout } from 'styles/common.styles'
import { DetailField, DetailsGridContainer, GoBackContainer } from './PhoneDetail.styles'
import { useNavigate, useParams } from 'react-router-dom'

import { Header } from 'components/Header'
import { Modal } from 'components/Modal'
import { PhoneDetailRoot } from 'screens/PhoneDetail/PhoneDetail.styles'
import { Toolbar } from 'components/Toolbar'
import { Typography } from 'components/Typography'
import { UpdatePhoneForm } from 'screens/PhoneDetail/components/UpdatePhoneForm'
import { useDeletePhone } from 'hooks/mutations/useDeletePhone'
import { useFetchPhoneDetails } from 'hooks/queries/useFetchPhoneDetails'
import { useState } from 'react'
import { useTitle } from 'ahooks'
import { useToastContext } from 'contexts/ToastContext'

export const PhoneDetail = () => {
  const [isEditPhoneModalOpen, setIsEditPhoneModalOpen] = useState<boolean>(false)
  const [isDeletePhoneModalOpen, setIsDeletePhoneModalOpen] = useState<boolean>(false)
  const { setToastMessage } = useToastContext()
  const params = useParams()
  const { phone, refetch: refetchPhone } = useFetchPhoneDetails({ id: params?.id || '' }, { enabled: !!params?.id })
  const { deletePhone } = useDeletePhone()
  useTitle(`Phone Catalog - ${phone?.name}`)
  const navigate = useNavigate()

  const handleDeletePhone = () => {
    if (!phone) return
    deletePhone(
      { id: phone.id },
      {
        onSuccess: () => {
          setIsDeletePhoneModalOpen(!isDeletePhoneModalOpen)
          setToastMessage({
            title: 'Success',
            description: 'Phone deleted successfully',
            variant: 'success',
          })
          navigate('/')
        },
        onError: ({ response }) => {
          setIsDeletePhoneModalOpen(!isDeletePhoneModalOpen)
          if (response)
            setToastMessage({
              title: response.data.error,
              description: `Status: ${response.data.statusCode} - ${response.data.message}`,
              variant: 'danger',
            })
        },
      },
    )
  }

  if (!phone) return null
  return (
    <PhoneDetailRoot>
      <Layout>
        <Header />
        <Toolbar
          onEditPhone={() => setIsEditPhoneModalOpen(!isEditPhoneModalOpen)}
          onDeletePhone={() => setIsDeletePhoneModalOpen(!isDeletePhoneModalOpen)}
        />
        <GoBackContainer justify="start">
          <Typography as="a" href="/">
            <FlexContainer>
              <ChevronLeftIcon alignmentBaseline="baseline" />
              Back
            </FlexContainer>
          </Typography>
        </GoBackContainer>
        <DetailsGridContainer>
          <FlexContainer direction="column" css={{ height: '85%', backgroundColor: '$whiteA11' }} justify="start">
            <Img
              // TODO: remove this image validation
              src={phone.imageSrc.startsWith('http') ? phone.imageSrc : '/placeholder.png'}
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
      <Modal onClose={() => setIsEditPhoneModalOpen(false)} open={isEditPhoneModalOpen}>
        <UpdatePhoneForm
          phone={phone}
          onError={(error) => {
            setToastMessage({
              title: error.error,
              description: `Status: ${error.statusCode} - ${error.message}`,
              variant: 'danger',
            })
          }}
          onSuccess={() => {
            setToastMessage({
              title: 'Success',
              description: 'Phone created successfully',
              variant: 'success',
            })
            setIsEditPhoneModalOpen(false)
            refetchPhone()
          }}
        />
      </Modal>
      <Modal onClose={() => setIsDeletePhoneModalOpen(false)} open={isDeletePhoneModalOpen}>
        <FlexContainer css={{ paddingBottom: '$4' }} direction="column" align="start" justify="spaceBetween">
          <Typography size="h3">Delete Phone</Typography>
          <Typography size="h5" color="dangerText">
            CAUTION: This action cannot be undone!
          </Typography>
        </FlexContainer>
        <FlexContainer justify="end">
          <Button onClick={handleDeletePhone} variant="danger">
            <Typography color="whiteA12">Delete</Typography>
          </Button>
        </FlexContainer>
      </Modal>
    </PhoneDetailRoot>
  )
}

PhoneDetail.displayName = 'PhoneDetail'
