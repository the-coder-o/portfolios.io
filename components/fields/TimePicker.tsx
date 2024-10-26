import { Clock } from 'lucide-react'
import { useRef } from 'react'

import { Label } from '../ui/label'

import TimePickerInput from './TimePickerInput'

interface IProps {
  date: Date | undefined
  setDate: (date: Date | undefined) => void
}

export function TimePicker({ date, setDate }: IProps) {
  const minuteRef = useRef<HTMLInputElement>(null)
  const hourRef = useRef<HTMLInputElement>(null)
  const secondRef = useRef<HTMLInputElement>(null)

  return (
    <div className="flex items-end gap-2">
      <div className="grid gap-1 text-center">
        <Label htmlFor="hours" className="text-xs">
          Soat
        </Label>
        <TimePickerInput picker="hours" date={date} setDate={setDate} ref={hourRef} onRightFocus={() => minuteRef.current?.focus()} />
      </div>
      <div className="grid gap-1 text-center">
        <Label htmlFor="minutes" className="text-xs">
          Minut
        </Label>
        <TimePickerInput picker="minutes" date={date} setDate={setDate} ref={minuteRef} onLeftFocus={() => hourRef.current?.focus()} onRightFocus={() => secondRef.current?.focus()} />
      </div>
      <div className="grid gap-1 text-center">
        <Label htmlFor="seconds" className="text-xs">
          Soniya
        </Label>
        <TimePickerInput picker="seconds" date={date} setDate={setDate} ref={secondRef} onLeftFocus={() => minuteRef.current?.focus()} />
      </div>
      <div className="flex h-10 items-center">
        <Clock className="ml-2 h-4 w-4" />
      </div>
    </div>
  )
}
