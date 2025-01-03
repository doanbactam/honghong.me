'use client'

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import { cn } from '@tszhong0411/utils'

export const ScrollArea = (props: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) => {
  const { className, children, ...rest } = props

  return (
    <ScrollAreaPrimitive.Root className={cn('relative overflow-hidden', className)} {...rest}>
      <ScrollAreaPrimitive.Viewport className='size-full rounded-[inherit]'>
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

export const ScrollBar = (
  props: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
) => {
  const { className, orientation = 'vertical', ...rest } = props

  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      orientation={orientation}
      className={cn(
        'flex touch-none select-none transition-colors',
        orientation === 'vertical' && 'h-full w-2.5 border-l border-l-transparent p-px',
        orientation === 'horizontal' && 'h-2.5 flex-col border-t border-t-transparent p-px',
        className
      )}
      {...rest}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb className='bg-border relative flex-1 rounded-full' />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}

ScrollArea.displayName = ScrollAreaPrimitive.ScrollArea.displayName
ScrollBar.displayName = ScrollAreaPrimitive.Scrollbar.displayName
