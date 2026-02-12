import React from 'react'
import { cn } from '@/lib/utils'

const SelectCtx = React.createContext(null)

export function Select({ value, onValueChange, children }) {
  return <SelectCtx.Provider value={{ value, onValueChange }}>{children}</SelectCtx.Provider>
}

export function SelectTrigger({ className='', children }) {
  // Just a container; the real control is SelectContent below.
  return <div className={cn('w-full rounded-2xl border border-neutral-200 px-3 py-2 text-sm', className)}>{children}</div>
}

export function SelectValue({ placeholder }) {
  const ctx = React.useContext(SelectCtx)
  return <span className="text-neutral-700">{ctx?.value ? ctx.value : placeholder}</span>
}

export function SelectContent({ className='', children }) {
  const ctx = React.useContext(SelectCtx)
  const items = React.Children.toArray(children).filter(Boolean)
  return (
    <select
      className={cn('mt-2 w-full rounded-2xl border border-neutral-200 px-3 py-2 text-sm', className)}
      value={ctx?.value ?? ''}
      onChange={(e) => ctx?.onValueChange?.(e.target.value)}
    >
      {items.map((child, idx) => {
        if (!React.isValidElement(child)) return null
        return React.cloneElement(child, { key: child.key ?? idx })
      })}
    </select>
  )
}

export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>
}
