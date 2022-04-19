import { Button, FlexContainer } from 'styles/common.styles'
import {
  DarkThemeToggle,
  DarkThemeToggleIcon,
  LightThemeToggleIcon,
  ToolbarRoot,
} from 'components/Toolbar/Toolbar.styles'
import { useDebounce, useUpdateEffect } from 'ahooks'

import { PlusCircledIcon } from '@radix-ui/react-icons'
import { TextInput } from 'components/TextInput'
import { Typography } from 'components/Typography'
import { useState } from 'react'

export type ToolbarProps = {
  searchValue?: string
  isDarkThemeSetted: boolean
  onSearch?: (searchValue: string) => void
  onThemeChange: (value: boolean) => void
  onCreatePhone?: () => void
}

export const Toolbar = ({ searchValue, onSearch, onThemeChange, isDarkThemeSetted, onCreatePhone }: ToolbarProps) => {
  const [searchQuery, setSearchQuery] = useState(searchValue)
  const debouncedSearchValue = useDebounce(searchQuery || '', { wait: 300 })

  useUpdateEffect(() => {
    if (onSearch) onSearch(debouncedSearchValue)
  }, [debouncedSearchValue])

  return (
    <ToolbarRoot>
      <FlexContainer justify="spaceBetween" css={{ height: '100%', width: '100%' }}>
        <FlexContainer justify="start">
          {!!onCreatePhone && (
            <Button onClick={onCreatePhone}>
              <FlexContainer align="center">
                <PlusCircledIcon color="white" />
                <Typography css={{ marginLeft: '$1' }} color="whiteA12">
                  Create Phone
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
          <DarkThemeToggle aria-label="Toggle dark theme" pressed={isDarkThemeSetted} onPressedChange={onThemeChange}>
            {isDarkThemeSetted ? <LightThemeToggleIcon /> : <DarkThemeToggleIcon />}
          </DarkThemeToggle>
        </FlexContainer>
      </FlexContainer>
    </ToolbarRoot>
  )
}

export default Toolbar
