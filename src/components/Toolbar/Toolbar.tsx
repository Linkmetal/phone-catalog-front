import {
  DarkThemeToggle,
  DarkThemeToggleIcon,
  LightThemeToggleIcon,
  ToolbarRoot,
} from 'components/Toolbar/Toolbar.styles'

import { FlexContainer } from 'styles/common.styles'
import { Link } from 'react-router-dom'
import { TextInput } from 'components/TextInput'
import { Typography } from 'components/Typography'

export type ToolbarProps = {
  searchValue: string
  isDarkThemeSetted: boolean
  onSearch: (searchValue: string) => void
  onThemeChange: (value: boolean) => void
}

export const Toolbar = ({ searchValue, onSearch, onThemeChange, isDarkThemeSetted }: ToolbarProps) => {
  return (
    <ToolbarRoot>
      <FlexContainer justify="spaceBetween" css={{ height: '100%', width: '100%' }}>
        <FlexContainer justify="start">
          <Link to="/login">
            <Typography color="accentText">Login</Typography>
          </Link>
        </FlexContainer>
        <FlexContainer justify="center">
          <TextInput
            singleLine
            id="searchValue"
            label={'Search phone'}
            value={searchValue}
            onChange={onSearch}
            placeholder={'Search phone...'}
          />
        </FlexContainer>
        <FlexContainer justify="end">
          <DarkThemeToggle pressed={isDarkThemeSetted} onPressedChange={onThemeChange}>
            {isDarkThemeSetted ? <LightThemeToggleIcon /> : <DarkThemeToggleIcon />}
          </DarkThemeToggle>
        </FlexContainer>
      </FlexContainer>
    </ToolbarRoot>
  )
}

export default Toolbar
