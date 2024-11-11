import { useFormContext } from 'react-hook-form'
import { cx } from 'class-variance-authority'

import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { FormControl, FormField, FormItem, FormMessage } from '../ui/form'

interface IProps {
  name: string
  label?: string
  placeholder?: string
  required?: boolean
  className?: string
}

export default function UserNameField({ placeholder, required, name, label, className }: IProps) {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-2">
          {label && (
            <Label htmlFor={name}>
              {label} {required && <span className="text-red-500 dark:text-red-900">*</span>}
            </Label>
          )}
          <div className="flex items-center">
            <div className="flex h-10 items-center rounded-l-xl bg-muted px-3 py-2 text-sm text-muted-foreground">www.portfoliosio.com/</div>
            <FormControl>
              <Input {...field} id={name} placeholder={placeholder} className={cx('!rounded-l-none', className)} />
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
