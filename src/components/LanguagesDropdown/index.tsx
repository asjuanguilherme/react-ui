import React from 'react'

import { DropdownMenu, DropdownMenuProps } from '@/components'
import { BRFlagIcon, USAFlagIcon } from '@/icons'

export type ValidLocales = 'pt-BR' | 'en'

export type LanguagesDropdownProps = DropdownMenuProps & {
  items?: never
  title?: never
  icon?: never
  activeLocale?: ValidLocales
  onLocaleChange?: (locale: ValidLocales) => void
}

const locales = [
  {
    locale: 'pt-BR',
    title: {
      'pt-BR': 'Português',
      en: 'Portuguese',
    },
    icon: BRFlagIcon,
  },
  {
    locale: 'en',
    title: {
      'pt-BR': 'Inglês',
      en: 'English',
    },
    icon: USAFlagIcon,
  },
] as const

export const LanguagesDropdown = ({
  activeLocale = 'en',
  onLocaleChange,
  ...props
}: LanguagesDropdownProps) => {
  const activeLocaleData = locales.filter(
    item => item.locale === activeLocale,
  )[0]!

  return (
    <DropdownMenu
      {...props}
      icon={activeLocaleData.icon}
      items={locales.map(item => ({
        key: item.locale,
        icon: item.icon,
        title: item.title[activeLocale],
        onClick: () => {
          onLocaleChange && onLocaleChange(item.locale)
        },
      }))}
      title={activeLocaleData.title[activeLocale]}
    />
  )
}
