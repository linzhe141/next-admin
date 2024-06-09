import { cn } from '@/lib/utils'
import { useState } from 'react'

export type Props = {
  label: string
  level?: number
  children?: Props[]
}
export function MenuNavItem(props: Props) {
  const { label, children, level = 1 } = props
  const [open, setOpen] = useState(false)
  function onClick(data: Props) {
    if (data.children?.length) {
      setOpen(!open)
    }
  }
  return (
    <div>
      <div
        onClick={() => onClick(props)}
        className={cn(
          'mt-1 flex cursor-pointer items-center hover:bg-accent hover:text-accent-foreground',
          level > 1 ? 'h-10' : 'h-12'
        )}
      >
        <div style={{ paddingLeft: 20 * (level - 1) + 'px' }} className='ml-6'>
          {label}
        </div>
      </div>
      {children?.length && (
        <ul
          style={{ height: open ? (40 + 4) * children.length + 'px' : '0px' }}
          className={cn('overflow-hidden transition-all duration-300')}
        >
          {children?.map((i) => <MenuNavItem {...i} level={level + 1} />)}
        </ul>
      )}
    </div>
  )
}
