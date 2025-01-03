'use client'

import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { cn } from '@tszhong0411/utils'

export const Separator = (props: React.ComponentProps<typeof SeparatorPrimitive.Root>) => {
  const { className, orientation = 'horizontal', decorative = true, ...rest } = props

  return (
    <SeparatorPrimitive.Root
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'bg-border shrink-0',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className
      )}
      {...rest}
    />
  )
}

Separator.displayName = SeparatorPrimitive.Root.displayName
