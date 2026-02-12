import React from 'react'
import { Button } from '@/components/ui/button'

const Ctx = React.createContext(null)

export function AlertDialog({ children }) {
  const [open, setOpen] = React.useState(false)
  const dialogRef = React.useRef(null)
  React.useEffect(() => {
    const d = dialogRef.current
    if (!d) return
    if (open && !d.open) d.showModal()
    if (!open && d.open) d.close()
  }, [open])
  return (
    <Ctx.Provider value={{ open, setOpen, dialogRef }}>
      {children}
    </Ctx.Provider>
  )
}

export function AlertDialogTrigger({ asChild, children }) {
  const ctx = React.useContext(Ctx)
  const child = React.Children.only(children)
  if (asChild && React.isValidElement(child)) {
    return React.cloneElement(child, { onClick: () => ctx?.setOpen(true) })
  }
  return <Button onClick={() => ctx?.setOpen(true)}>{children}</Button>
}

export function AlertDialogContent({ className='', children }) {
  const ctx = React.useContext(Ctx)
  return (
    <dialog ref={ctx?.dialogRef} className={'rounded-2xl border border-neutral-200 p-0 w-[92vw] max-w-md ' + className}
      onClose={() => ctx?.setOpen(false)}
    >
      <div className="p-4">{children}</div>
    </dialog>
  )
}

export function AlertDialogHeader({ children }) { return <div className="space-y-1">{children}</div> }
export function AlertDialogTitle({ children }) { return <div className="text-base font-semibold">{children}</div> }
export function AlertDialogDescription({ children }) { return <div className="text-sm text-neutral-600">{children}</div> }
export function AlertDialogFooter({ children }) { return <div className="mt-4 flex justify-end gap-2">{children}</div> }

export function AlertDialogCancel({ children }) {
  const ctx = React.useContext(Ctx)
  return <Button variant="outline" onClick={() => ctx?.setOpen(false)}>{children}</Button>
}

export function AlertDialogAction({ onClick, children }) {
  const ctx = React.useContext(Ctx)
  return (
    <Button
      onClick={() => { onClick?.(); ctx?.setOpen(false) }}
    >
      {children}
    </Button>
  )
}
