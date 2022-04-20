import { AddPhoneImage, useAddPhoneImage } from 'hooks/mutations/useAddPhoneImage'
import { ApiError, FormErrors } from 'types/Errors'
import { Button, FlexContainer } from 'styles/common.styles'
import { Phone, PhoneManufacturer, PhoneRamMemory } from 'types/phone'
import { PhoneManufacturerValues, PhoneRamMemoryValues } from 'constants/phone'

import { AddPhone } from 'hooks/mutations/useAddPhone'
import { FileInput } from 'components/FileInput'
import { Select } from 'components/Select'
import { TextInput } from 'components/TextInput'
import { Typography } from 'components/Typography'
import { UpdatePhoneFormRoot } from './UpdatePhoneForm.styles'
import { useEditPhone } from 'hooks/mutations/useEditPhone'
import { useFormik } from 'formik'

export type PhoneListProps = {
  phone: Phone
  onSuccess: () => void
  onError: (error: ApiError) => void
}

export type UpdatePhoneFormValues = Partial<AddPhone.Variables & AddPhoneImage.Variables>

export const UpdatePhoneForm = ({ phone, onSuccess, onError }: PhoneListProps) => {
  const { editPhone } = useEditPhone(phone.id)
  const { addPhoneImage } = useAddPhoneImage()

  const onSubmit = (values: UpdatePhoneFormValues) => {
    const phoneValues = { ...values, imageSrc: phone.imageSrc } as AddPhone.Variables
    editPhone(phoneValues, {
      onSuccess: (response) => {
        if (!values.image) return onSuccess()
        addPhoneImage(
          { id: response.id, image: values.image },
          {
            onSuccess,
            onError: (error) => {
              if (error.response) return onError(error.response.data)
            },
          },
        )
      },
      onError: (error) => {
        if (error.response) return onError(error.response.data)
      },
    })
  }

  const initialValues: UpdatePhoneFormValues = {
    name: phone.name,
    description: phone.description,
    manufacturer: phone.manufacturer,
    color: phone.color,
    image: undefined,
    price: phone.price,
    ram: phone.ram,
    processor: phone.processor,
    screen: phone.screen,
  }

  const validations = (values: UpdatePhoneFormValues) => {
    const errors: FormErrors<UpdatePhoneFormValues> = {}

    if (!values.name) {
      errors.name = 'Required'
    }

    if (!values.description) {
      errors.description = 'Required'
    }

    if (!values.price) {
      errors.price = 'Required'
    } else if (values.price < 0) {
      errors.price = 'Price must be positive'
    }

    if (!values.manufacturer) {
      errors.manufacturer = 'Required'
    }

    if (!values.ram) {
      errors.ram = 'Required'
    }

    if (!values.processor) {
      errors.processor = 'Required'
    }

    if (!values.screen) {
      errors.screen = 'Required'
    }

    if (!values.color) {
      errors.color = 'Required'
    }

    return errors
  }

  const { values, errors, handleSubmit, setValues } = useFormik<UpdatePhoneFormValues>({
    initialValues,
    onSubmit,
    validate: validations,
    validateOnChange: false,
    validateOnMount: false,
    validateOnBlur: true,
  })

  return (
    <UpdatePhoneFormRoot css={{ width: '250px' }} direction="column" align="start">
      <Typography css={{ paddingBottom: '$6' }} size="h3">
        Edit Phone
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <TextInput
          value={values?.name || ''}
          onChange={(name) => setValues({ ...values, name })}
          error={errors.name}
          id="name"
          label="Name"
        />
        <Select
          error={errors.manufacturer || ''}
          placeholder="Select manufacturer"
          value={values?.manufacturer || ''}
          values={[...PhoneManufacturerValues]}
          onChange={(manufacturer) => setValues({ ...values, manufacturer: manufacturer as PhoneManufacturer })}
          id="manufacturer"
          label="Manufacturer"
        />
        <TextInput
          value={values?.processor || ''}
          onChange={(processor) => setValues({ ...values, processor })}
          error={errors.processor}
          id="processor"
          label="Proccessor"
        />
        <Select
          error={errors.ram || ''}
          placeholder="Select RAM"
          value={values?.ram || ''}
          values={[...PhoneRamMemoryValues]}
          onChange={(ram) => setValues({ ...values, ram: ram as PhoneRamMemory })}
          id="ram"
          label="RAM Memory"
        />
        <TextInput
          value={values?.screen || ''}
          onChange={(screen) => setValues({ ...values, screen })}
          error={errors.screen}
          id="screen"
          label="Screen"
        />
        <TextInput
          value={values?.color || ''}
          onChange={(color) => setValues({ ...values, color })}
          error={errors.color}
          id="color"
          label="Color"
        />
        <TextInput
          type="number"
          value={values?.price?.toString() || '0'}
          onChange={(price) => setValues({ ...values, price: parseInt(price) })}
          error={errors.price}
          id="price"
          min={0}
          label="Price"
        />
        <TextInput
          value={values.description || ''}
          onChange={(description) => setValues({ ...values, description })}
          error={errors.description}
          id="description"
          label="Description"
        />
        <FileInput
          onFileUpload={(image) => {
            if (image) setValues({ ...values, image })
          }}
          error={errors.image}
          id="image"
          label="Image"
        />
        <FlexContainer justify="end">
          <Button type="submit">
            <Typography color="whiteA12">Submit</Typography>
          </Button>
        </FlexContainer>
      </form>
    </UpdatePhoneFormRoot>
  )
}

export default UpdatePhoneFormRoot
