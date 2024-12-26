'use client'

import { useFormContext } from 'react-hook-form'
import { useMemo, useState } from 'react'
import { Plus, Search, X } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

import { Skill, skills } from '@/.mock/skills.data'

interface SkillsFieldProps {
  name: string
  label: string
  required?: boolean
}

export default function SkillsField({ name, label, required }: SkillsFieldProps) {
  const { control } = useFormContext()
  const [searchQuery, setSearchQuery] = useState('')

  const filteredSkills = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    if (!query) return skills
    return skills.filter((skill) => [skill.name].some((text) => text.toLowerCase().includes(query)))
  }, [searchQuery])

  return (
    <FormField
      control={control}
      name={name}
      defaultValue={[]}
      render={({ field }) => {
        const selectedSkills = Array.isArray(field.value) ? field.value : []

        const handleAddSkill = (skill: Skill) => {
          if (selectedSkills.length < 10) {
            field.onChange([...selectedSkills, skill])
            setSearchQuery('')
          }
        }

        const handleAddCustomSkill = () => {
          if (selectedSkills.length < 10) {
            const newSkill: Skill = {
              name: searchQuery.trim(),
              logo: '',
              category: '',
              description: '',
              level: '',
            }
            field.onChange([...selectedSkills, newSkill])
            setSearchQuery('')
          }
        }

        const handleRemoveSkill = (skillName: string) => {
          field.onChange(selectedSkills.filter((skill: Skill) => skill.name !== skillName))
        }

        const isSkillSelected = (skillName: string) => {
          return selectedSkills.some((skill: Skill) => skill.name === skillName)
        }

        const isCustomSkill = searchQuery.trim() !== '' && !filteredSkills.some((skill) => skill.name.toLowerCase() === searchQuery.trim().toLowerCase())

        return (
          <FormItem className="mb-5 w-full">
            <FormLabel>
              {label} {required && <span className="text-destructive">*</span>}
            </FormLabel>
            <FormControl>
              <div>
                <div className="mb-2 flex flex-wrap gap-2">
                  {selectedSkills.map((skill: Skill, index: number) => (
                    <Badge key={index} variant="secondary" className="flex items-center gap-1 rounded-xl py-1.5 pl-3 pr-2">
                      {skill.name}
                      <Button variant="ghost" size="sm" className="h-auto p-0 hover:bg-transparent" onClick={() => handleRemoveSkill(skill.name)}>
                        <X className="h-4 w-4" />
                        <span className="sr-only">Remove {skill.name}</span>
                      </Button>
                    </Badge>
                  ))}
                </div>
                <div className="space-y-4">
                  <div className="relative">
                    <Input type="text" placeholder="Search skills..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="rounded-xl pl-10" />
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" aria-hidden="true" />
                  </div>
                  {searchQuery && (
                    <div className="rounded-xl border bg-card p-2">
                      <div className="flex flex-col gap-1">
                        {filteredSkills.map((skill, index: number) => (
                          <Button key={index} variant="ghost" size="sm" className="flex w-full items-center justify-start gap-2 rounded-xl px-2" onClick={() => handleAddSkill(skill)} disabled={isSkillSelected(skill.name) || selectedSkills.length >= 10}>
                            <span className="flex-1 text-left">{skill.name}</span>
                            <Plus className="h-4 w-4" aria-hidden="true" />
                          </Button>
                        ))}
                        {isCustomSkill && (
                          <Button variant="ghost" size="sm" className="flex w-full items-center justify-start gap-2 rounded-xl px-2" onClick={handleAddCustomSkill} disabled={selectedSkills.length >= 10}>
                            <span className="flex-1 text-left">Add &quot;{searchQuery.trim()}&quot;</span>
                            <Plus className="h-4 w-4" aria-hidden="true" />
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                  {!searchQuery && (
                    <>
                      <h3 className="text-sm font-medium">Suggested Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.slice(0, 17).map((skill) => (
                          <Button key={skill.name} variant="outline" size="sm" className="flex items-center gap-2 rounded-xl" onClick={() => handleAddSkill(skill)} disabled={isSkillSelected(skill.name) || selectedSkills.length >= 10}>
                            {skill.name}
                            <Plus className="h-4 w-4" aria-hidden="true" />
                          </Button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}
