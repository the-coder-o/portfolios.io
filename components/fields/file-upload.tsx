import { useFormContext } from 'react-hook-form'
import { FileUploader } from 'react-drag-drop-files'
import { useState } from 'react'
import Image from 'next/image'
import { FileText, Upload, X as CloseIcon } from 'lucide-react'

import calculateFileSize from '@/lib/calculate-file-size'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

interface IProps {
  name: string
  label?: string
  required?: boolean
  isFileUpload?: boolean
  maxFiles?: number
}

export default function FileField({ name, label, required, isFileUpload, maxFiles = 5 }: IProps) {
  const { control } = useFormContext()
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = (files: FileList, value: any[], onChange: (newValue: any[]) => void) => {
    const newFiles = Array.from(files)
    const fileTypes = isFileUpload ? ['application/pdf'] : ['image/png', 'image/jpeg']
    const invalidFiles = newFiles.filter((file) => !fileTypes.includes(file.type))

    if (invalidFiles.length > 0) {
      setError(`Invalid file type(s). Only ${isFileUpload ? 'PDF' : 'PNG/JPG'} files are allowed.`)
      return
    }

    if (value.length + newFiles.length > maxFiles) {
      setError(`You can upload up to ${maxFiles} files only.`)
      return
    }

    setError(null)
    onChange([...value, ...newFiles])
  }

  return (
    <FormField
      control={control}
      name={name}
      render={({ field: { value = [], onChange } }) => (
        <FormItem>
          {label && (
            <FormLabel className="mb-2 inline-block text-sm font-medium">
              {`${label} `}
              {required && <span className="text-red-500">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <div className="space-y-4">
              {value.length > 0 && (
                <div className="flex flex-wrap gap-4">
                  {value.map((file: any, index: number) => (
                    <div key={index} className="group relative mb-5 !h-[100px] !w-[100px] max-w-fit overflow-hidden rounded-xl border shadow-sm">
                      {file?.type?.includes('pdf') ? (
                        <div className="flex items-center gap-3 p-4">
                          <FileText className="size-10 stroke-1 text-blue-500" />
                          <div className="flex flex-col">
                            <span className="max-w-[300px] truncate text-sm font-medium">{file.name}</span>
                            <span className="text-xs text-gray-500">{calculateFileSize(file.size)}</span>
                          </div>
                        </div>
                      ) : (
                        <div className="relative max-w-md">
                          <Image src={typeof file === 'string' ? `https://api.portfoliosworld.com${file}` : URL.createObjectURL(file)} width={500} height={500} alt="preview" className="mb-5 !h-[100px] !w-[100px] rounded-xl bg-cover object-contain" />
                        </div>
                      )}
                      <button type={'button'} onClick={() => onChange(value.filter((_: any, i: any) => i !== index))} className="absolute right-2 top-2 rounded-full bg-gray-900/60 p-1.5 text-white opacity-0 transition-opacity hover:bg-gray-900/80 group-hover:opacity-100">
                        <CloseIcon className="size-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <FileUploader handleChange={(files: FileList) => handleFileChange(files, value, onChange)} name="file" multiple types={isFileUpload ? ['PDF'] : ['PNG', 'JPG']} classes="file-uploader">
                <div className="flex min-h-[200px] cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-6 transition-colors hover:bg-gray-100 dark:border dark:border-input dark:bg-transparent dark:hover:bg-black/10">
                  <Upload className="size-10 stroke-1 text-gray-400" />
                  <div className="text-center">
                    <p className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">Drag and drop your {isFileUpload ? 'PDFs' : 'images'} here</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">or click to browse from your computer</p>
                  </div>
                </div>
              </FileUploader>
              {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
            </div>
          </FormControl>
          <FormMessage className="mt-2 text-sm" />
        </FormItem>
      )}
    />
  )
}
