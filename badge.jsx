import React from 'react'
import { cn } from '@/lib/utils'

export function Badge({ className='', variant='default', ...props }) {
  const variants = {
    default: 'bg-neutral-900 text-white border-neutral-900',
    secondary: 'bg-neutral-100 text-neutral-900 border-neutral-100',
    outline: 'bg-white text-neutral-900 border-neutral-200',
    destructive: 'bg-red-600 text-white border-red-600',
  }
  return <span className={cn('inline-flex items-center rounded-full border px-2 py-0.5 text-xs', variants[variant] || variants.default, className)} {...props} />
}
