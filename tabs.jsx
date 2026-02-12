import React from 'react'
import { cn } from '@/lib/utils'

const TabsCtx = React.createContext(null)

export function Tabs({ defaultValue, value, onValueChange, className='', children }) {
  const [internal, setInternal] = React.useState(defaultValue)
  const current = value ?? internal
  const set = (v) => {
    onValueChange?.(v)
    if (value === undefined) setInternal(v)
  }
  return <div className={className}><TabsCtx.Provider value={{ value: current, set }}>{children}</TabsCtx.Provider></div>
}

export function TabsList({ className='', ...props }) {
  return <div className={cn('flex gap-1 rounded-2xl border border-neutral-200 p-1', className)} {...props} />
}

export function TabsTrigger({ value, className='', children, ...props }) {
  const ctx = React.useContext(TabsCtx)
  const active = ctx?.value === value
  return (
    <button
      type="button"
      onClick={() => ctx?.set(value)}
      className={cn('flex-1 rounded-2xl px-2 py-2 text-sm font-medium border transition',
        active ? 'bg-neutral-900 text-white border-neutral-900' : 'bg-white text-neutral-700 border-transparent',
        className)}
      {...props}
    >
      {children}
    </button>
  )
}

export function TabsContent({ value, className='', children, ...props }) {
  const ctx = React.useContext(TabsCtx)
  if (ctx?.value !== value) return null
  return <div className={className} {...props}>{children}</div>
}
