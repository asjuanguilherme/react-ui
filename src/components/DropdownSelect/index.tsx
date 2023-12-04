import { CSSProperties, ChangeEventHandler, useMemo, useState } from 'react'
import { HTMLStyleAttributes, LayerIndex } from 'types'
import {
  IconComponent,
  FormField,
  HandleFormFieldStatusParams,
  handleFormFieldStatus,
  MagIcon,
  TextInput,
} from 'components'
import _uniqueId from 'lodash/uniqueId'
import { ChevronButton, Popover, Menu } from 'components'

export type DropdownSelectSearchProps = {
  enabled: boolean
  placeholder?: string
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export type DropdownSelectOptionProps = {
  label: string
  value: string
  icon?: IconComponent
}

export type DropdownSelectCommonProps = {
  options?: DropdownSelectOptionProps[]
  label?: string
  placeholder?: string
  initialValue?: string
  layer?: LayerIndex
  fillWidth?: boolean
  disabled?: boolean
  loading?: boolean
  maxHeight?: number
  closeOnSelect?: boolean
  icon?: IconComponent
  size?: 'small' | 'medium' | 'large'
  search?: DropdownSelectSearchProps
  triggerOn?: 'hover' | 'click'
} & HandleFormFieldStatusParams &
  HTMLStyleAttributes

export type DropdownSelectUncontrolledProps = DropdownSelectCommonProps & {
  value?: never
  onChange?: never
}

export type DropdownSelectControlledProps = DropdownSelectCommonProps & {
  value: string
  onChange: (value: string) => void
}

export type DropdownSelectProps =
  | DropdownSelectUncontrolledProps
  | DropdownSelectControlledProps

export const DropdownSelect = ({
  value,
  onChange,
  style,
  className,
  label,
  initialValue,
  placeholder,
  options,
  layer = 1,
  icon,
  fillWidth,
  closeOnSelect = true,
  disabled = false,
  loading = false,
  maxHeight,
  error,
  success,
  info,
  size,
  search,
  triggerOn = 'click',
}: DropdownSelectProps) => {
  const [internalSelectedOption, setInternalSelectedValue] = useState<
    string | undefined
  >(initialValue)

  const [searchValue, setSearchValue] = useState('')

  const isControlled = Boolean(value && onChange)

  const handledSelectedOption = isControlled ? value : internalSelectedOption

  const selectedOptionData = useMemo(() => {
    if (!options || options.length === 0) return null

    return options.filter(option => {
      return option.value === handledSelectedOption
    })[0]
  }, [handledSelectedOption, options])

  const optionsList = useMemo(() => {
    if (!search?.enabled || !searchValue) return options

    return options?.filter(option => {
      const regex = new RegExp(searchValue, 'i')
      return regex.test(option.label)
    })
  }, [options, searchValue, search])

  const fieldStatus = handleFormFieldStatus({ error, success, info })

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = e => {
    setSearchValue(e.target.value)
    search?.onChange && search.onChange(e)
  }

  return (
    <Popover.Root triggerOn={triggerOn}>
      {({ isActive, setIsActive, triggerRef }) => (
        <FormField.Root
          fillWidth={fillWidth}
          className={className}
          style={style}
        >
          <FormField.Label>{label}</FormField.Label>
          <ChevronButton
            active={isActive}
            layer={layer}
            disabled={loading || disabled}
            icon={icon}
            loading={loading}
            title={selectedOptionData?.label || placeholder}
            size={size}
            setRef={triggerRef}
            showChevron={!loading}
            fillWidth={fillWidth}
          />
          <Popover.Box visible={isActive} layer={layer}>
            {search?.enabled && (
              <>
                <TextInput
                  prefix={<MagIcon />}
                  placeholder={search.placeholder}
                  fillWidth
                  value={searchValue}
                  onChange={handleSearchChange}
                />
                <Menu.Divider />
              </>
            )}
            <Menu.List maxHeight={maxHeight}>
              {optionsList?.map(item => (
                <Menu.Item
                  key={item.value}
                  active={item.value === selectedOptionData?.value}
                  icon={item.icon}
                  title={item.label}
                  layer={layer}
                  onClick={e => {
                    setInternalSelectedValue(item.value)
                    onChange && onChange(item.value)

                    if (closeOnSelect) setIsActive(false)
                  }}
                  liTag
                />
              ))}
            </Menu.List>
          </Popover.Box>
          <FormField.Status {...fieldStatus} />
        </FormField.Root>
      )}
    </Popover.Root>
  )
}
