import React, {
  ComponentProps,
  FocusEventHandler,
  forwardRef,
  useState
} from 'react'
import { ChangeHandler } from 'react-hook-form'
import PasswordInput, {
  PasswordInputProps
} from '../../../shared/components/form/PasswordInput'
import PasswordRequirements from './PasswordRequirements'

type PasswordInputWithRequirementsProps = PasswordInputProps & {
  currentValue: string
  onBlur: ChangeHandler
}

export default forwardRef<
  HTMLInputElement,
  ComponentProps<'input'> & PasswordInputWithRequirementsProps
>(function PasswordInputWithRequirements(
  { currentValue, colorScheme, ...props },
  ref
) {
  const [isFocus, setIsFocus] = useState(false)

  const handleInputFocus = () => {
    setIsFocus(true)
  }

  const handleInputBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    props.onBlur(e)
    setIsFocus(false)
  }
  return (
    <>
      <PasswordInput
        ref={ref as any}
        onFocus={handleInputFocus}
        colorScheme={colorScheme}
        {...props}
        onBlur={handleInputBlur}
      />
      {isFocus && (
        <PasswordRequirements
          password={currentValue}
          colorScheme={colorScheme}
        />
      )}
    </>
  )
})
