import { X } from 'lucide-react'
import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'

import { Button } from '../ui/button'

import TextField from './text'

interface DynamicFieldArrayProps {
  name: string
  label: string
  addButtonText?: string
  className?: string
}

export default function MultiTextField({ name, label, addButtonText = 'Add Item', className }: DynamicFieldArrayProps) {
  const { control } = useFormContext()
  const { fields, append, remove } = useFieldArray({ control, name })

  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
      <div className="mt-3 space-y-4">
        {fields.map((field, index) => (
          <div key={field.id} className="flex items-center space-x-2">
            <TextField name={`${name}.${index}.role`} placeholder="Role" className="flex-1 rounded-xl" />
            <span className="dark:text-gray-300">at</span>
            <TextField name={`${name}.${index}.company`} placeholder="Company" className="flex-1 rounded-xl" />
            <Button onClick={() => remove(index)} variant="outline" size="icon" className="rounded-xl">
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button onClick={() => append({ role: '', company: '' })} variant="outline" size="default" className="mt-2 rounded-xl">
          {addButtonText}
        </Button>
      </div>
    </div>
  )
}
