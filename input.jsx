import React from 'react'
import { cn } from '@/lib/utils'

export const Input = React.forwardRef(function Input({ className='', ...props }, ref) {
  return (
    <input
      ref={ref}
      className={cn('w-full rounded-2xl border border-neutral-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-200', className)}
      {...props}
    />
  )
})
