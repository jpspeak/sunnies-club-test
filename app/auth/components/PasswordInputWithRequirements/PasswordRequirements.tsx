import { InputColorScheme } from '@/app/shared/components/form/Input'
import regex from '@/app/shared/constants/regex'
import { cva } from 'class-variance-authority'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const iconValidCva = cva('', {
  variants: {
    colorScheme: {
      white: ['text-white'],
      neutral: ['text-success-700']
    }
  },
  defaultVariants: {
    colorScheme: 'neutral'
  }
})
const iconInvalidCva = cva('', {
  variants: {
    colorScheme: {
      white: ['text-white'],
      neutral: ['text-soft-black-400']
    }
  },
  defaultVariants: {
    colorScheme: 'neutral'
  }
})

const CheckIcon = ({
  colorScheme,
  isValid
}: {
  colorScheme?: InputColorScheme
  isValid?: boolean
}) => {
  if (isValid) {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='14px'
        height='14px'
        className={twMerge(iconValidCva({ colorScheme }))}
      >
        <path
          className='fill-current'
          d='M12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10C22,6.477,17.523,2,12,2z M10,17.414l-4.707-4.707 l1.414-1.414L10,14.586l7.293-7.293l1.414,1.414L10,17.414z'
        />
      </svg>
    )
  } else {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='14px'
        height='14px'
        className={twMerge(iconInvalidCva({ colorScheme }))}
      >
        <path
          className='fill-current'
          d='M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 16.292969 8.2929688 L 10 14.585938 L 7.7070312 12.292969 L 6.2929688 13.707031 L 10 17.414062 L 17.707031 9.7070312 L 16.292969 8.2929688 z'
        />
      </svg>
    )
  }
}

const labelCva = cva(['text-xs'], {
  variants: {
    colorScheme: {
      white: ['text-white'],
      neutral: ['text-soft-black-400']
    }
  },
  defaultVariants: {
    colorScheme: 'neutral'
  }
})

export default function PasswordRequirements({
  colorScheme,
  password
}: {
  password: string
  colorScheme?: InputColorScheme
}) {
  const requirements = [
    { label: 'Minimum of 8 characters', validationRegex: regex.min8Char },
    { label: '1 uppercase letter', validationRegex: regex.uppercase },
    { label: '1 lowercase letter', validationRegex: regex.lowercase },
    {
      label: '1 special character',
      validationRegex: regex.specialChar
    }
  ]

  return (
    <ul className='grid grid-cols-2 gap-1 mt-2 text-current'>
      {requirements.map((requirement) => (
        <li key={requirement.label} className='flex gap-1'>
          <CheckIcon
            colorScheme={colorScheme}
            isValid={!!password && requirement.validationRegex.test(password)}
          />
          <span className={twMerge(labelCva({ colorScheme }))}>
            {requirement.label}
          </span>
        </li>
      ))}
    </ul>
  )
}
