import React from 'react'
import { cn } from '@/lib/utils'

export const Textarea = React.forwardRef(function Textarea({ className='', ...props }, ref) {
  return (
    <textarea
      ref={ref}
      className={cn('w-full min-h-[84px] rounded-2xl border border-neutral-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-200', className)}
      {...props}
    />
  )
})
