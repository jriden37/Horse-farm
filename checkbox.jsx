import React from 'react'
export function Checkbox({ checked, onCheckedChange }) {
  return (
    <input
      type="checkbox"
      checked={!!checked}
      onChange={(e) => onCheckedChange?.(e.target.checked)}
      className="h-5 w-5 rounded border-neutral-300"
    />
  )
}
