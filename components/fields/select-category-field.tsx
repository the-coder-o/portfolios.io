import { useFormContext } from 'react-hook-form'

import { cn } from '@/lib/utils'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'

interface IProps {
  name: string
  placeholder?: string
  data: { name: string; type: string; disabled?: boolean }[]
  label?: string
  required?: boolean
  className?: string
}

export default function SelectCategoryField({ data, placeholder, name, label, required, className }: IProps) {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel>
              {`${label} `}
              {required && <span className="text-red-500 dark:text-red-900">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger className={cn('w-full rounded-xl', className)}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                {data.map((item) => (
                  <SelectItem value={item.type} key={item.name} disabled={item.disabled}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
