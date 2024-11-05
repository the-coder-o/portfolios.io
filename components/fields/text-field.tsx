import { cx } from 'class-variance-authority'
import { useFormContext } from 'react-hook-form'

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'

interface IProps {
  name: string
  label?: string
  placeholder?: string
  required?: boolean
  className?: string
}

export default function TextField({ placeholder, required, name, label, className }: IProps) {
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
            <Input {...field} placeholder={placeholder} className={cx('rounded-xl', className)} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
