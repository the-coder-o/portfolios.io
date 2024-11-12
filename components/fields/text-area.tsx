import { useFormContext } from 'react-hook-form'
import { cx } from 'class-variance-authority'

import { Textarea } from '../ui/textarea'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'

interface IProps {
  name: string
  label?: string
  placeholder?: string
  required?: boolean
  className?: string
}

export default function TextAreaField({ placeholder, required, name, label, className }: IProps) {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cx('w-full', className)}>
          {label && (
            <FormLabel>
              ${label}
              {required && <span className="text-red-500 dark:text-red-900">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <Textarea {...field} placeholder={placeholder} className="h-[180px] rounded-xl" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
