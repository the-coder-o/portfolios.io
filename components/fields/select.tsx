import { useFormContext } from 'react-hook-form'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'

interface IProps {
  name: string
  placeholder?: string
  data: { name: string; type: string; disabled?: boolean }[]
  label?: string
  required?: boolean
}

export default function SelectField({ data, placeholder, name, label, required }: IProps) {
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
              <SelectTrigger className="w-[200px] rounded-xl">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                {data.map((item) => (
                  <SelectItem value={item.type} key={item.type} disabled={item.disabled}>
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
