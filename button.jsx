import React from 'react'
import { cn } from '@/lib/utils'

export function Button({ className='', variant='default', size='default', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-2xl px-3 py-2 text-sm font-medium active:scale-[0.99] transition border'
  const variants = {
    default: 'bg-neutral-900 text-white border-neutral-900',
    outline: 'bg-white text-neutral-900 border-neutral-200',
    destructive: 'bg-red-600 text-white border-red-600',
    secondary: 'bg-neutral-100 text-neutral-900 border-neutral-100',
    ghost: 'bg-transparent text-neutral-900 border-transparent',
  }
  const sizes = {
    default: '',
    sm: 'px-3 py-1.5 text-sm',
    icon: 'p-2 w-10 h-10',
  }
  return (
    <button className={cn(base, variants[variant] || variants.default, sizes[size] || '', className)} {...props} />
  )
}
