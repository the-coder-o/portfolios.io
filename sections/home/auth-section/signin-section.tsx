import React from 'react'

import { AnimatedTooltip } from '@/components/animation/animated-toolip'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const SignInSection = () => {
  return (
    <div className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2">
      <div className="flex h-full min-h-screen w-full">
        <div className="flex w-full items-center justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-md">
            <div>
              <Logo />
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-black dark:text-white">Sign up for an account</h2>
            </div>
            <div className="mt-10">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-neutral-700 dark:text-[#a3a3a3]">
                    Full name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="shadow-aceternity block w-full rounded-xl border-0 bg-white px-4 py-1.5 text-black placeholder:text-[#a3a3a3] focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:bg-neutral-900 dark:text-white sm:text-sm sm:leading-6"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-neutral-700 dark:text-[#a3a3a3]">
                    Email address
                  </label>
                  <Input
                    id="email"
                    placeholder="hello@johndoe.com"
                    className="shadow-aceternity block w-full rounded-xl border-0 bg-white px-4 py-1.5 text-black placeholder:text-[#a3a3a3] focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:bg-neutral-900 dark:text-white sm:text-sm sm:leading-6"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-neutral-700 dark:text-[#a3a3a3]">
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      placeholder="type a password"
                      className="shadow-aceternity block w-full rounded-xl border-0 bg-white px-4 py-1.5 text-black placeholder:text-[#a3a3a3] focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:bg-neutral-900 dark:text-white sm:text-sm sm:leading-6"
                      type="password"
                    />
                  </div>
                </div>
                <div>
                  <Button
                    type="submit"
                    className="justify-centxl relative z-10 flex w-full items-center rounded-xl border border-transparent bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] transition duration-200 hover:bg-black/90 md:text-sm"
                  >
                    Sign Up
                  </Button>
                </div>
              </form>
              <p className="mt-4 text-center text-sm text-muted dark:text-[#a3a3a3]">
                Already have an account?{' '}
                <a className="text-black dark:text-white" href="/sign-in">
                  Sign in
                </a>
              </p>
            </div>
            <div className="mt-10">
              <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-neutral-300 dark:border-neutral-700"></div>
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-white px-6 text-neutral-400 dark:bg-black dark:text-[#a3a3a3]">Or continue with</span>
                </div>
              </div>
              <div className="mt-6 flex w-full items-center justify-center">
                <Button className="justify-centxl relative z-10 flex w-full items-center rounded-xl border border-transparent bg-neutral-900 px-4 py-1.5 text-sm font-medium text-white shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] transition duration-200 hover:bg-black/90 md:text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                  <span className="ml-2 text-sm font-semibold leading-6">Github</span>
                </Button>
              </div>
              <p className="mt-8 text-center text-sm text-neutral-600 dark:text-[#a3a3a3]">By clicking on sign up, you agree to our Terms of Service and Privacy Policy.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-20 hidden w-full items-center justify-center overflow-hidden border-l border-neutral-100 bg-gray-50 dark:border-neutral-800 dark:bg-neutral-900 md:flex">
        <div className="mx-auto max-w-sm">
          <div className="flex w-full flex-row items-center justify-center">
            <div className="mb-10 flex w-full flex-row items-center justify-center">
              <AnimatedTooltip items={people} />
            </div>
          </div>
          <h2 className="mb-10 text-center text-xl font-semibold text-black dark:text-white">Best place to find portfolio inspiration</h2>
          <p className="text-center text-sm text-muted dark:text-[#a3a3a3]">Browse our curated collection of 310+ exceptional designs to help you create your best portfolio yet.</p>
        </div>
        <svg width="1595" height="2" viewBox="0 0 1595 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute top-20 w-full object-contain">
          <path d="M0 1H1594.5" stroke="url(#line-path-gradient-1)" strokeDasharray="8 8"></path>
          <defs>
            <linearGradient id="line-path-gradient-1" x1="0" y1="1.5" x2="1594.5" y2="1.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0"></stop>
              <stop offset="0.2" stopColor="var(--neutral-400)"></stop>
              <stop offset="0.8" stopColor="var(--neutral-400)"></stop>
              <stop offset="1" stopColor="white" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
        <svg width="1595" height="2" viewBox="0 0 1595 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute bottom-20 w-full object-contain">
          <path d="M0 1H1594.5" stroke="url(#line-path-gradient-:rb6:)" stroke-dasharray="8 8"></path>
          <defs>
            <linearGradient id="line-path-gradient-:rb6:" x1="0" y1="1.5" x2="1594.5" y2="1.5" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" stop-opacity="0"></stop>
              <stop offset="0.2" stop-color="var(--neutral-400)"></stop>
              <stop offset="0.8" stop-color="var(--neutral-400)"></stop>
              <stop offset="1" stop-color="white" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
        <svg width="1595" height="2" viewBox="0 0 1595 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute inset-y-0 -right-80 h-full w-full rotate-90 scale-x-150 transform object-contain">
          <path d="M0 1H1594.5" stroke="url(#line-path-gradient-:rb7:)" stroke-dasharray="8 8"></path>
          <defs>
            <linearGradient id="line-path-gradient-:rb7:" x1="0" y1="1.5" x2="1594.5" y2="1.5" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" stop-opacity="0"></stop>
              <stop offset="0.2" stop-color="var(--neutral-400)"></stop>
              <stop offset="0.8" stop-color="var(--neutral-400)"></stop>
              <stop offset="1" stop-color="white" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
        <svg width="1595" height="2" viewBox="0 0 1595 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute inset-y-0 -left-80 h-full w-full rotate-90 scale-x-150 transform object-contain">
          <path d="M0 1H1594.5" stroke="url(#line-path-gradient-:rb8:)" stroke-dasharray="8 8"></path>
          <defs>
            <linearGradient id="line-path-gradient-:rb8:" x1="0" y1="1.5" x2="1594.5" y2="1.5" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" stop-opacity="0"></stop>
              <stop offset="0.2" stop-color="var(--neutral-400)"></stop>
              <stop offset="0.8" stop-color="var(--neutral-400)"></stop>
              <stop offset="1" stop-color="white" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

const people = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
  },
  {
    id: 2,
    name: 'Robert Johnson',
    designation: 'Product Manager',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 3,
    name: 'Jane Smith',
    designation: 'Data Scientist',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 4,
    name: 'Emily Davis',
    designation: 'UX Designer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 5,
    name: 'Tyler Durden',
    designation: 'Soap Developer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
  },
  {
    id: 6,
    name: 'Dora',
    designation: 'The Explorer',
    image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80',
  },
]
