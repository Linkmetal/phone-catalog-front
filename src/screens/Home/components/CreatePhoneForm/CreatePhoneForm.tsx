import { AddPhone, useAddPhone } from 'hooks/mutations/useAddPhone'
import { AddPhoneImage, useAddPhoneImage } from 'hooks/mutations/useAddPhoneImage'

import { Button } from 'styles/common.styles'
import { CreatePhoneFormRoot } from './CreatePhoneForm.styles'
import { FileInput } from 'components/FileInput'
import { FormErrors } from 'types/FormErrors'
import { TextInput } from 'components/TextInput'
import { Typography } from 'components/Typography'
import { useFormik } from 'formik'

export type PhoneListProps = {
  onSuccess: () => void
  onError: () => void
  onCancel: () => void
}

export type CreatePhoneFormValues = Partial<AddPhone.Variables & AddPhoneImage.Variables>

export const CreatePhoneForm = ({ onSuccess }: PhoneListProps) => {
  const { addPhone } = useAddPhone()
  const { addPhoneImage } = useAddPhoneImage()

  const onSubmit = (values: CreatePhoneFormValues) => {
    const phoneValues = { ...values } as AddPhone.Variables
    addPhone(phoneValues, {
      onSuccess: (response) => {
        if (!values.image) return
        addPhoneImage(
          { id: response.id, image: values.image },
          {
            onSuccess: () => onSuccess(),
          },
        )
      },
    })
  }

  const initialValues: CreatePhoneFormValues = {
    name: undefined,
    description: undefined,
    manufacturer: undefined,
    color: undefined,
    image: undefined,
    price: undefined,
    ram: undefined,
    processor: undefined,
    screen: undefined,
  }

  const validations = (values: CreatePhoneFormValues) => {
    const errors: FormErrors<CreatePhoneFormValues> = {}

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

    return errors
  }

  const { values, errors, handleSubmit, setValues } = useFormik<CreatePhoneFormValues>({
    initialValues,
    onSubmit,
    validate: validations,
    validateOnChange: false,
    validateOnMount: false,
    validateOnBlur: true,
  })

  return (
    <CreatePhoneFormRoot css={{ width: '250px' }} direction="column" align="start">
      <Typography css={{ paddingBottom: '$6' }} size="h3">
        Create Phone
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <TextInput
          value={values?.name || ''}
          onChange={(name) => setValues({ ...values, name })}
          error={errors.name}
          id="name"
          label="Name"
        />
        <TextInput
          value={values?.manufacturer || ''}
          // onChange={(manufacturer) => setValues({ ...values, manufacturer })}
          error={errors.manufacturer}
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
        <TextInput
          value={values?.ram || ''}
          // onChange={(ram) => setValues({ ...values, ram })}
          error={errors.ram}
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
          onFileUpload={(image) => setValues({ ...values, image })}
          error={errors.image}
          id="image"
          label="Image"
        />
        <Button type="submit">
          <Typography color="whiteA12">Submit</Typography>
        </Button>
      </form>
    </CreatePhoneFormRoot>
  )
}

export default CreatePhoneFormRoot
