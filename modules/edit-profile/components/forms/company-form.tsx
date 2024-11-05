import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import TextField from '@/components/fields/text-field'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'

export const companySchema = z.object({
  company_name: z.string().optional(),
  company_website: z.string().url('Enter correct company url').optional(),
})

type CompanyFormSchema = z.infer<typeof companySchema>

const CompanyForm = () => {
  const methods = useForm<CompanyFormSchema>({
    resolver: zodResolver(companySchema),
    defaultValues: { company_name: '', company_website: '' },
  })

  const { handleSubmit } = methods

  const onSubmit = (data: CompanyFormSchema) => {
    console.log(data)
  }

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5">
          <TextField name="company_name" label="Company name" placeholder="Enter company name" className="mt-1 rounded-xl" />
          <TextField name="company_website" label="Company website" placeholder="Enter company url" className="mt-1 rounded-xl" />
        </div>
        <div className="flex justify-end">
          <Button type="submit" variant={'secondary'} className="mt-5 rounded-xl">
            Save chnages
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default CompanyForm
