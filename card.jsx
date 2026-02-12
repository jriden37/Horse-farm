import React from 'react'
import { cn } from '@/lib/utils'

export function Card({ className='', ...props }) {
  return <div className={cn('border border-neutral-200 rounded-2xl bg-white shadow-sm', className)} {...props} />
}
export function CardContent({ className='', ...props }) {
  return <div className={cn('p-4', className)} {...props} />
}
