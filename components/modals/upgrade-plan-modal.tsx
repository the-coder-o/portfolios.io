'use client'

import * as React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { Check, ExternalLink } from 'lucide-react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface PlanFeature {
  feature: string
}

interface Plan {
  name: string
  price: string
  description: string
  features: PlanFeature[]
  buttonText: string
  buttonVariant?: 'default' | 'outline'
}

const plans: Plan[] = [
  {
    name: 'Free',
    price: '$0',
    description: 'For individuals:',
    features: [{ feature: 'Access to PortfoliosWorld.dev/chat' }, { feature: 'Up to five Projects' }],
    buttonText: 'Current Plan',
    buttonVariant: 'outline',
  },
  {
    name: 'Premium',
    price: '$20',
    description: 'For power users:',
    features: [{ feature: 'Everything in Free' }, { feature: 'Higher messaging limits' }, { feature: 'Custom domains on published Blocks' }, { feature: 'Unlimited Projects' }, { feature: 'Import from Figma' }],
    buttonText: 'Upgrade to a Premium Plan',
  },
  {
    name: 'Team',
    price: 'Contact Sales',
    description: 'For teams:',
    features: [{ feature: 'Everything in Premium' }, { feature: 'Team collaboration' }, { feature: 'Advanced security' }, { feature: 'Custom branding' }],
    buttonText: 'Contact Sales',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large companies:',
    features: [{ feature: 'Everything in Team' }, { feature: 'SAML SSO' }, { feature: 'Dedicated Customer Support' }, { feature: 'Priority Access to PortfoliosWorld' }, { feature: 'Opted-out of training by default' }],
    buttonText: 'Contact Sales',
  },
]

export const UpgradePlanModal = ({ setIsDialogOpen, isDialogOpen }: any) => {
  const [selectedPlan, setSelectedPlan] = useState('free')

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="max-w-3xl !rounded-xl p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl">Upgrade Plan</DialogTitle>
          <p className="text-sm text-muted-foreground">
            You&apos;re currently on the <span className={'font-bold text-white'}>PortfoliosWorld</span> Free plan. Upgrade to Premium for advanced features, Team for collaboration, or Enterprise for custom solutions.
          </p>
        </DialogHeader>
        <Tabs defaultValue="free" value={selectedPlan} onValueChange={setSelectedPlan} className="p-6 pt-4">
          <TabsList className="grid w-full grid-cols-4 rounded-xl">
            {plans.map((plan) => (
              <TabsTrigger key={plan.name.toLowerCase()} value={plan.name.toLowerCase()} className="rounded-xl">
                <div className="text-left">
                  <div>{plan.name}</div>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          {plans.map((plan) => (
            <TabsContent key={plan.name.toLowerCase()} value={plan.name.toLowerCase()} className="py-4">
              <Card className="rounded-xl">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold">
                        {plan.price}
                        {plan.price !== 'Contact Sales' && plan.price !== 'Custom' && <span className="text-sm font-normal text-muted-foreground"> /user/month</span>}
                      </div>
                      <p className="text-sm text-muted-foreground">{plan.description}</p>
                    </div>
                    <ul className="space-y-2.5">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">{feature.feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Compare plans and options on our{' '}
              <Link href="#" className="text-primary hover:underline">
                pricing page <ExternalLink className="inline h-3 w-3" />
              </Link>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)} className="rounded-xl">
                Cancel
              </Button>
              <Button variant={plans.find((p) => p.name.toLowerCase() === selectedPlan)?.buttonVariant || 'default'} className="rounded-xl">
                {plans.find((p) => p.name.toLowerCase() === selectedPlan)?.buttonText}
              </Button>
            </div>
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
