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
    <div style={{ paddingLeft: 32 * (level - 1) + 'px' }}>
      <div
        onClick={() => onClick(props)}
        className={cn(
          'mt-1 flex cursor-pointer items-center justify-between hover:bg-accent hover:text-accent-foreground',
          level > 1 ? 'h-10 border-l border-l-slate-500' : 'h-12'
        )}
      >
        <div className={cn('flex items-center', level > 1 ? 'ml-2' : 'ml-6')}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M3 12l3 3l3 -3l-3 -3z'></path>
            <path d='M15 12l3 3l3 -3l-3 -3z'></path>
            <path d='M9 6l3 3l3 -3l-3 -3z'></path>
            <path d='M9 18l3 3l3 -3l-3 -3z'></path>
          </svg>
          <div className='ml-2'>{label}</div>
        </div>
        {children?.length && (
          <div className={cn('mr-4 transition-all', open ? 'rotate-180' : '')}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='1'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M6 9l6 6l6 -6'></path>
            </svg>
          </div>
        )}
      </div>
      {children?.length && (
        <ul
          style={{ height: open ? (40 + 4) * children.length + 'px' : '0px' }}
          className={cn('overflow-hidden transition-all duration-300')}
        >
          {children?.map((i) => (
            <MenuNavItem {...i} level={level + 1} key={i.label} />
          ))}
        </ul>
      )}
    </div>
  )
}
