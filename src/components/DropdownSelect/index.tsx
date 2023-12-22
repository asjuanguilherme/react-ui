import React from 'react'
import { ChangeEventHandler, useMemo, useState } from 'react'

import { HTMLStyleAttributes } from '~/types'

import { ThemeLayerIndex } from '~/lib/theming'

import {
  FormField,
  HandleFormFieldStatusParams,
  handleFormFieldStatus,
  TextInput,
} from '~/components'
import { ChevronButton, Popover, Menu } from '~/components'
import { IconComponent, MagIcon } from '~/icons'

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
  layer?: ThemeLayerIndex
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
  fillWidth = false,
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

    try {
      const filteredList = options?.filter(option => {
        const regex = new RegExp(searchValue, 'i')
        return regex.test(option.label)
      })

      return filteredList
    } catch (err) {
      console.error(err)
      return options
    }
  }, [options, searchValue, search])

  const fieldStatus = handleFormFieldStatus({ error, success, info })

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = e => {
    setSearchValue(e.target.value)
    search?.onChange && search.onChange(e)
  }

  return (
    <Popover.Root triggerOn={triggerOn}>
      {({ isActive, setIsActive, triggerRef, popoverBoxProps }) => (
        <FormField.Root
          className={className}
          fillWidth={fillWidth}
          style={style}
        >
          <FormField.Label>{label}</FormField.Label>
          <ChevronButton
            active={isActive}
            disabled={loading || disabled}
            fillWidth={fillWidth}
            icon={icon}
            layer={layer}
            loading={loading}
            setRef={triggerRef}
            showChevron={!loading}
            size={size}
            title={selectedOptionData?.label || placeholder}
          />
          <Popover.Box layer={layer} {...popoverBoxProps}>
            {search?.enabled && (
              <>
                <TextInput
                  fillWidth
                  onChange={handleSearchChange}
                  placeholder={search.placeholder}
                  prefix={<MagIcon />}
                  value={searchValue}
                />
                <Menu.Divider />
              </>
            )}
            <Menu.List maxHeight={maxHeight}>
              {optionsList?.map(item => (
                <Menu.Item
                  active={item.value === selectedOptionData?.value}
                  icon={item.icon}
                  key={item.value}
                  layer={layer}
                  liTag
                  onClick={() => {
                    setInternalSelectedValue(item.value)
                    onChange && onChange(item.value)

                    if (closeOnSelect) setIsActive(false)
                  }}
                  title={item.label}
                  fillWidth
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
