'use client'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { cn } from '@tszhong0411/utils'
import { CheckIcon, ChevronRightIcon, DotIcon } from 'lucide-react'

export const DropdownMenu = DropdownMenuPrimitive.Root
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
export const DropdownMenuGroup = DropdownMenuPrimitive.Group
export const DropdownMenuPortal = DropdownMenuPrimitive.Portal
export const DropdownMenuSub = DropdownMenuPrimitive.Sub
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

export const DropdownMenuSubTrigger = (
  props: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
) => {
  const { className, children, inset, ...rest } = props

  return (
    <DropdownMenuPrimitive.SubTrigger
      className={cn(
        'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
        'focus:bg-accent',
        'data-[state=open]:bg-accent',
        inset && 'pl-8',
        className
      )}
      {...rest}
    >
      {children}
      <ChevronRightIcon className='ml-auto size-4' />
    </DropdownMenuPrimitive.SubTrigger>
  )
}

export const DropdownMenuSubContent = (
  props: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>
) => {
  const { className, ...rest } = props

  return (
    <DropdownMenuPrimitive.SubContent
      className={cn(
        'bg-popover text-popover-foreground z-50 min-w-32 overflow-hidden rounded-md border p-1 shadow-lg',
        'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
        'data-[side=top]:slide-in-from-bottom-2',
        'data-[side=right]:slide-in-from-left-2',
        'data-[side=bottom]:slide-in-from-top-2',
        'data-[side=left]:slide-in-from-right-2',
        className
      )}
      {...rest}
    />
  )
}

export const DropdownMenuContent = (
  props: React.ComponentProps<typeof DropdownMenuPrimitive.Content>
) => {
  const { className, sideOffset = 4, ...rest } = props

  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        sideOffset={sideOffset}
        className={cn(
          'bg-popover text-popover-foreground z-50 min-w-32 overflow-hidden rounded-md border p-1 shadow-md',
          'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
          'data-[side=top]:slide-in-from-bottom-2',
          'data-[side=right]:slide-in-from-left-2',
          'data-[side=bottom]:slide-in-from-top-2',
          'data-[side=left]:slide-in-from-right-2',
          className
        )}
        {...rest}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

export const DropdownMenuItem = (
  props: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
) => {
  const { className, inset, ...rest } = props

  return (
    <DropdownMenuPrimitive.Item
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors',
        'focus:bg-accent focus:text-accent-foreground',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        inset && 'pl-8',
        className
      )}
      {...rest}
    />
  )
}

export const DropdownMenuCheckboxItem = (
  props: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>
) => {
  const { className, children, checked, ...rest } = props

  return (
    <DropdownMenuPrimitive.CheckboxItem
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors',
        'focus:bg-accent focus:text-accent-foreground',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
      checked={checked}
      {...rest}
    >
      <span className='absolute left-2 flex size-3.5 items-center justify-center'>
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className='size-4' />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

export const DropdownMenuRadioItem = (
  props: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>
) => {
  const { className, children, ...rest } = props

  return (
    <DropdownMenuPrimitive.RadioItem
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors',
        'focus:bg-accent focus:text-accent-foreground',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
      {...rest}
    >
      <span className='absolute left-2 flex size-3.5 items-center justify-center'>
        <DropdownMenuPrimitive.ItemIndicator>
          <DotIcon className='size-9' />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

export const DropdownMenuLabel = (
  props: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
) => {
  const { className, inset, ...rest } = props

  return (
    <DropdownMenuPrimitive.Label
      className={cn('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className)}
      {...rest}
    />
  )
}

export const DropdownMenuSeparator = (
  props: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>
) => {
  const { className, ...rest } = props

  return (
    <DropdownMenuPrimitive.Separator
      className={cn('bg-muted -mx-1 my-1 h-px', className)}
      {...rest}
    />
  )
}

export const DropdownMenuShortcut = (props: React.ComponentProps<'span'>) => {
  const { className, ...rest } = props

  return <span className={cn('ml-auto text-xs tracking-widest opacity-60', className)} {...rest} />
}

DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut'
