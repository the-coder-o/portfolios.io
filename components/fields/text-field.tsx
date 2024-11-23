import { useFormContext } from 'react-hook-form'
import { LucideIcon } from 'lucide-react'
import { cx } from 'class-variance-authority'

import { Input } from '../ui/input'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'

interface IProps {
  name: string
  label?: string
  placeholder?: string
  required?: boolean
  className?: string
  iconLeft?: LucideIcon
  iconRight?: LucideIcon
  iconClassName?: string
  type?: string
}

export default function TextField({ placeholder, required, name, label, className, iconLeft: IconLeft, iconRight: IconRight, iconClassName, type = 'text' }: IProps) {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cx('w-full')}>
          {label && (
            <FormLabel>
              {`${label} `}
              {required && <span className="text-red-500 dark:text-red-900">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <div className="relative">
              {IconLeft && (
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <IconLeft className={cx('h-5 w-5 text-muted-foreground', iconClassName)} />
                </div>
              )}
              <Input
                {...field}
                type={type}
                placeholder={placeholder}
                className={cx('rounded-xl', IconLeft && 'pl-10', IconRight && 'pr-10', className)}
                value={type === 'number' ? (field.value ? Number(field.value) : '') : field.value} // Ensure number input gets a number
                onChange={(e) => {
                  const value = type === 'number' ? (e.target.value ? Number(e.target.value) : '') : e.target.value
                  field.onChange(value)
                }}
              />
              {IconRight && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <IconRight className={cx('h-5 w-5 text-muted-foreground', iconClassName)} />
                </div>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
