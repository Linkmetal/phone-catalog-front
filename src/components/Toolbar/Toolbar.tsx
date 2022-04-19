import { Button, FlexContainer } from 'styles/common.styles'
import {
  DarkThemeToggle,
  DarkThemeToggleIcon,
  LightThemeToggleIcon,
  ToolbarRoot,
} from 'components/Toolbar/Toolbar.styles'
import { Pencil2Icon, PlusCircledIcon, TrashIcon } from '@radix-ui/react-icons'
import { useCookieState, useDebounce, useUpdateEffect } from 'ahooks'
import { useEffect, useState } from 'react'

import { TextInput } from 'components/TextInput'
import { Typography } from 'components/Typography'
import { darkTheme } from 'styles/stitches.config'

export type ToolbarProps = {
  searchValue?: string
  onSearch?: (searchValue: string) => void
  onCreatePhone?: () => void
  onEditPhone?: () => void
  onDeletePhone?: () => void
}

export const Toolbar = ({ searchValue, onSearch, onCreatePhone, onEditPhone, onDeletePhone }: ToolbarProps) => {
  const [isDarkThemeSetted, setIsDarkThemeSetted] = useCookieState('darkTheme', { defaultValue: 'false' })
  const [searchQuery, setSearchQuery] = useState(searchValue)
  const debouncedSearchValue = useDebounce(searchQuery || '', { wait: 300 })
  const darkThemeContainer = document.querySelector('#darkThemeContainer')

  useUpdateEffect(() => {
    if (onSearch) onSearch(debouncedSearchValue)
  }, [debouncedSearchValue])

  // NOTE: This useEffect is for updating the className on App.tsx to toggle the darkTheme programatically
  useEffect(() => {
    if (darkThemeContainer) darkThemeContainer.className = isDarkThemeSetted === 'true' ? darkTheme : ''
  }, [isDarkThemeSetted])

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
            onPressedChange={() => setIsDarkThemeSetted(isDarkThemeSetted === 'true' ? 'false' : 'true')}
          >
            {isDarkThemeSetted === 'true' ? <LightThemeToggleIcon /> : <DarkThemeToggleIcon />}
          </DarkThemeToggle>
        </FlexContainer>
      </FlexContainer>
    </ToolbarRoot>
  )
}

export default Toolbar
