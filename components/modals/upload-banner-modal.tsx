'use client'

import * as React from 'react'
import Image from 'next/image'

import { Label } from '@/components/ui/label'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

import { Input } from '../ui/input'

interface Color {
  id: number
  value: string
}

const colors: Color[] = [
  { id: 1, value: 'linear-gradient(to right, #ff9a9e, #fad0c4)' },
  { id: 2, value: 'linear-gradient(to right, #a18cd1, #fbc2eb)' },
  { id: 3, value: 'linear-gradient(to right, #ffecd2, #fcb69f)' },
  { id: 4, value: 'linear-gradient(to right, #84fab0, #8fd3f4)' },
  { id: 5, value: 'linear-gradient(to right, #a6c0fe, #f68084)' },
  { id: 6, value: 'linear-gradient(to right, #d4fc79, #96e6a1)' },
  { id: 7, value: 'linear-gradient(to right, #fa709a, #fee140)' },
]

export const UploadBannerModal = () => {
  const [open, setOpen] = React.useState(false)
  const [selectedColor, setSelectedColor] = React.useState<string>('linear-gradient(to right, #ff9a9e, #fad0c4)')
  const [image, setImage] = React.useState<string | null>(null)
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault()
    const file = event.dataTransfer.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault()
  }

  const handleSave = () => {
    console.log('Selected color:', selectedColor)
    console.log('Image data:', image)
    setOpen(false)
  }

  return (
    <div className="max-sm:w-full">
      <Button onClick={() => setOpen(true)} className="rounded-xl max-sm:!w-full">
        Upload banner
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="!rounded-2xl sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Crop header image</DialogTitle>
            <DialogDescription>Upload a 1600 x 480px image for best results.</DialogDescription>
          </DialogHeader>
          <div
            style={{ backgroundImage: selectedColor }}
            className="mt-4 flex h-[300px] cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-black transition-all duration-300"
            onClick={() => fileInputRef.current?.click()}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {image ? (
              <Image src={image} alt="Preview" width={100} height={100} className="!max-h-full !max-w-full object-contain" />
            ) : (
              <div className="text-center">
                <p className="text-black">Drag and drop an image here or click to select</p>
              </div>
            )}
            <Input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
          </div>
          <div className="mt-4">
            <Label htmlFor="color-picker" className="mb-2 block">
              Select background color
            </Label>
            <div id="color-picker" className="flex items-center gap-2">
              {colors.map((color) => (
                <Button key={color.id} variant="outline" className={`h-8 w-8 rounded-full p-0 ${selectedColor === color.value ? 'ring-2 ring-primary ring-offset-2' : ''}`} style={{ backgroundImage: color.value }} onClick={() => setSelectedColor(color.value)} />
              ))}
            </div>
          </div>
          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => setOpen(false)} className="rounded-xl">
              Cancel
            </Button>
            <Button onClick={handleSave} className="rounded-xl">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
