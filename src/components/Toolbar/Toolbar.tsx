import { Button, FlexContainer } from 'styles/common.styles'
import {
  DarkThemeToggle,
  DarkThemeToggleIcon,
  LightThemeToggleIcon,
  ToolbarRoot,
} from 'components/Toolbar/Toolbar.styles'
import { Pencil2Icon, PlusCircledIcon, TrashIcon } from '@radix-ui/react-icons'
import { useDebounce, useUpdateEffect } from 'ahooks'

import { TextInput } from 'components/TextInput'
import { Typography } from 'components/Typography'
import { useState } from 'react'

export type ToolbarProps = {
  searchValue?: string
  isDarkThemeSetted: string
  onSearch?: (searchValue: string) => void
  onThemeChange: (value: boolean) => void
  onCreatePhone?: () => void
  onEditPhone?: () => void
  onDeletePhone?: () => void
}

export const Toolbar = ({
  searchValue,
  onSearch,
  onThemeChange,
  isDarkThemeSetted,
  onCreatePhone,
  onEditPhone,
  onDeletePhone,
}: ToolbarProps) => {
  const [searchQuery, setSearchQuery] = useState(searchValue)
  const debouncedSearchValue = useDebounce(searchQuery || '', { wait: 300 })

  useUpdateEffect(() => {
    if (onSearch) onSearch(debouncedSearchValue)
  }, [debouncedSearchValue])

  return (
    <ToolbarRoot>
      <FlexContainer justify="spaceBetween" css={{ height: '100%', width: '100%' }}>
        <FlexContainer css={{ gap: '$4' }} justify="start" align="center">
          {!!onCreatePhone && (
            <Button onClick={onCreatePhone}>
              <FlexContainer align="center">
                <PlusCircledIcon color="white" />
                <Typography size="button" css={{ marginLeft: '$1' }} color="whiteA12">
                  Create Phone
                </Typography>
              </FlexContainer>
            </Button>
          )}
          {!!onEditPhone && (
            <Button onClick={onEditPhone}>
              <FlexContainer align="center">
                <Pencil2Icon color="white" />
                <Typography size="button" css={{ marginLeft: '$1' }} color="whiteA12">
                  Edit Phone
                </Typography>
              </FlexContainer>
            </Button>
          )}
          {!!onDeletePhone && (
            <Button variant="danger" onClick={onDeletePhone}>
              <FlexContainer align="center">
                <TrashIcon color="white" />
                <Typography size="button" css={{ marginLeft: '$1' }} color="whiteA12">
                  Delete Phone
                </Typography>
              </FlexContainer>
            </Button>
          )}
        </FlexContainer>
        {!!onSearch && (
          <FlexContainer align="center" justify="center">
            <TextInput
              singleLine
              id="searchValue"
              label={'Search phone'}
              value={searchQuery || ''}
              onChange={setSearchQuery}
              placeholder={'Search phone...'}
            />
          </FlexContainer>
        )}
        <FlexContainer justify="end">
          <DarkThemeToggle
            aria-label="Toggle dark theme"
            pressed={isDarkThemeSetted === 'true'}
            onPressedChange={onThemeChange}
          >
            {isDarkThemeSetted === 'true' ? <LightThemeToggleIcon /> : <DarkThemeToggleIcon />}
          </DarkThemeToggle>
        </FlexContainer>
      </FlexContainer>
    </ToolbarRoot>
  )
}

export default Toolbar
