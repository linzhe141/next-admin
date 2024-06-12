import { cn } from '@/lib/utils'
import { useState } from 'react'
import { IconType } from 'react-icons/lib'
import { IoIosArrowDown } from 'react-icons/io'
import { PiEmpty } from 'react-icons/pi'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export type Props = {
  label: string
  level?: number
  href?: string
  children?: Props[]
  icon?: IconType
}
export function MenuNavItem(props: Props) {
  const pathname = usePathname()
  const { label, children, level = 1, icon: Icon = PiEmpty, href } = props
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
          'mt-1 flex cursor-pointer items-center justify-between hover:bg-[#5e9ced] hover:text-white',
          level > 1 ? 'h-10 border-l border-l-slate-500' : 'h-12',
          href === pathname ? 'bg-[#5e9ced] text-white' : ''
        )}
      >
        <div
          className={cn(
            'flex flex-1 items-center',
            level > 1 ? 'ml-2' : 'ml-6'
          )}
        >
          <Icon />
          {href ? (
            <Link
              className='ml-2 w-full text-sm font-medium leading-10'
              href={href}
            >
              {label}
            </Link>
          ) : (
            <div className='ml-2 text-sm font-medium'>{label}</div>
          )}
        </div>
        {children?.length && (
          <div className={cn('mr-4 transition-all', open ? 'rotate-180' : '')}>
            <IoIosArrowDown />
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
