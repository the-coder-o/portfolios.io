import { InputHTMLAttributes, KeyboardEvent, forwardRef, useEffect, useMemo, useState } from 'react'

import { cn } from '@/lib/utils'

import { Input } from '../ui/input'

import { getArrowByType, getDateByType, setDateByType, TimePickerType } from './TimePickerUtils'

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  picker: TimePickerType
  date: Date | undefined
  setDate: (date: Date | undefined) => void
  onRightFocus?: () => void
  onLeftFocus?: () => void
}

const TimePickerInput = forwardRef<HTMLInputElement, IProps>(({ className, type = 'tel', value, id, name, date = new Date(new Date().setHours(0, 0, 0, 0)), setDate, onChange, onKeyDown, picker, onLeftFocus, onRightFocus, ...props }, ref) => {
  const [flag, setFlag] = useState<boolean>(false)
  const [prevIntKey, setPrevIntKey] = useState<string>('0')

  useEffect(() => {
    if (flag) {
      const timer = setTimeout(() => {
        setFlag(false)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [flag])

  const calculatedValue = useMemo(() => {
    return getDateByType(date, picker)
  }, [date, picker])

  const calculateNewValue = (key: string) => {
    if (picker === '12hours') {
      if (flag && calculatedValue.slice(1, 2) === '1' && prevIntKey === '0') return '0' + key
    }

    return !flag ? '0' + key : calculatedValue.slice(1, 2) + key
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab') return
    e.preventDefault()
    if (e.key === 'ArrowRight') onRightFocus?.()
    if (e.key === 'ArrowLeft') onLeftFocus?.()
    if (['ArrowUp', 'ArrowDown'].includes(e.key)) {
      const step = e.key === 'ArrowUp' ? 1 : -1
      const newValue = getArrowByType(calculatedValue, step, picker)
      if (flag) setFlag(false)
      const tempDate = new Date(date)
      setDate(setDateByType(tempDate, newValue, picker))
    }
    if (e.key >= '0' && e.key <= '9') {
      if (picker === '12hours') setPrevIntKey(e.key)

      const newValue = calculateNewValue(e.key)
      if (flag) onRightFocus?.()
      setFlag((prev) => !prev)
      const tempDate = new Date(date)
      setDate(setDateByType(tempDate, newValue, picker))
    }
  }

  return (
    <Input
      ref={ref}
      id={id || picker}
      name={name || picker}
      className={cn('w-[48px] text-center font-mono text-base tabular-nums caret-transparent focus:bg-accent focus:text-accent-foreground [&::-webkit-inner-spin-button]:appearance-none', className)}
      value={value || calculatedValue}
      onChange={(e) => {
        e.preventDefault()
        onChange?.(e)
      }}
      type={type}
      inputMode="decimal"
      onKeyDown={(e) => {
        onKeyDown?.(e)
        handleKeyDown(e)
      }}
      {...props}
    />
  )
})

TimePickerInput.displayName = 'TimePickerInput'
export default TimePickerInput
