import { Plus, Trash2 } from 'lucide-react'
import { useFormContext, useFieldArray } from 'react-hook-form'
// @ts-expect-error test
import QuillEditor from 'react-quill'

import { Button } from '../ui/button'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'

import 'react-quill/dist/quill.snow.css'

interface IProps {
  name: string
  label?: string
  placeholder?: string
  required?: boolean
}

export default function TextEditor({ name, label, required, placeholder }: IProps) {
  const { control } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
  })

  const formats = ['header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'link']

  const modules = {
    toolbar: {
      container: [[{ header: [1, 2, 3, 4, false] }], ['bold', 'italic', 'underline', 'blockquote'], [{ list: 'ordered' }, { list: 'bullet' }, 'link']],
    },
    clipboard: {
      matchVisual: true,
    },
  }

  return (
    <div>
      {fields.map((field, index) => (
        <FormField
          key={field.id}
          control={control}
          name={`${name}.${index}`}
          render={({ field }) => (
            <FormItem>
              {label && (
                <FormLabel>
                  {`${label} ${index + 1}`}
                  {required && <span className="text-red-500 dark:text-red-900">*</span>}
                </FormLabel>
              )}
              <FormControl>
                <QuillEditor theme="snow" value={field.value} onChange={field.onChange} formats={formats} modules={modules} placeholder={placeholder} />
              </FormControl>
              <FormMessage />
              {fields.length > 1 && (
                <Button type="button" onClick={() => remove(index)} className="absolute right-2 bg-transparent p-1 text-red-500 hover:bg-transparent focus:bg-transparent">
                  <Trash2 className="size-5" />
                </Button>
              )}
            </FormItem>
          )}
        />
      ))}

      <Button variant="ghost" type="button" onClick={() => append('')} className="flex items-center">
        <Plus className="mr-2 size-5 text-blue-500 dark:text-white" />
        Qo&apos;shish
      </Button>
    </div>
  )
}
