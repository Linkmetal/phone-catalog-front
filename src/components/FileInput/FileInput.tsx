import * as Label from '@radix-ui/react-label'

import { Button, FlexContainer, Img } from 'styles/common.styles'
import { FileInputRoot, FileInputWrapper, Input } from './FileInput.styles'
import { forwardRef, useState } from 'react'

import { Typography } from 'components/Typography'
import { useUpdateEffect } from 'ahooks'

export type FileInputProps = {
  id: string
  value?: File
  onFileUpload?: (value: File) => void
  disabled?: boolean
  label: string
  error?: string
  singleLine?: boolean
  min?: number
  max?: number
}

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({ id, label, error, onFileUpload = () => undefined }, forwardedRef) => {
    const [file, setFile] = useState<File>()
    const [imageURI, setImageURI] = useState<string>('')
    const reader = new FileReader()
    reader.onload = (e) => {
      if (e.target?.result) setImageURI(e.target.result as string)
    }

    useUpdateEffect(() => {
      if (!!file) reader.readAsDataURL(file)
    }, [file])

    return (
      <FileInputRoot>
        <Label.Root role="presentation" aria-label={label} asChild htmlFor={id}>
          <Typography size="body" color="accentTextContrast">
            {label}
          </Typography>
        </Label.Root>
        <FileInputWrapper css={{}}>
          <Input
            id={id}
            ref={forwardedRef}
            onChange={(event) => {
              if (event.target.files) {
                setFile(event.target?.files[0])
                return onFileUpload(event.target?.files[0])
              }
            }}
            type="file"
          />
          <>
            {!file && (
              <Button
                type="button"
                onClick={() => {
                  document.getElementById(id)?.click()
                }}
              >
                <Typography color="whiteA12">Upload file</Typography>
              </Button>
            )}
            {file && (
              <FlexContainer css={{ width: '100%' }} justify="start">
                <Img css={{ height: '$12', width: '50%' }} src={imageURI} />
                <Button
                  variant="danger"
                  type="button"
                  onClick={() => {
                    const input = document.querySelector(`#${id}`) as HTMLInputElement
                    input.files = null
                    setFile(undefined)
                  }}
                >
                  <Typography color="whiteA12">Delete</Typography>
                </Button>
              </FlexContainer>
            )}
          </>
        </FileInputWrapper>
        <Typography size="caption" color="dangerText" css={{ marginBottom: '$2' }}>
          {error}
        </Typography>
      </FileInputRoot>
    )
  },
)

FileInput.displayName = 'FileInput'
