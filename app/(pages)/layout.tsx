'use client'
import { MenuNav } from '@/components/menuNav'
import { Button } from '@/components/ui/button'
import { logout } from '@/lib/actions'
import { useRouter } from 'next/navigation'
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const router = useRouter()
  const handleClick = async () => {
    await logout()
    router.push('/login')
  }
  return (
    <div className='flex h-screen w-screen'>
      <aside className='flex w-64 flex-col border-r-2 border-r-muted'>
        <div className='flex h-[50px] items-center justify-between gap-4 p-4 px-4 py-3 shadow'>
          <div className='flex items-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 256 256'
              className='h-8 w-8 transition-all'
            >
              <rect width='256' height='256' fill='none'></rect>
              <line
                x1='208'
                y1='128'
                x2='128'
                y2='208'
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='16'
              ></line>
              <line
                x1='192'
                y1='40'
                x2='40'
                y2='192'
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='16'
              ></line>
              <span className='sr-only'>Website Name</span>
            </svg>
            <div className='visible flex w-auto flex-col justify-end truncate'>
              <span className='font-medium'>Next Admin</span>
            </div>
          </div>
        </div>
        <div className='h-0 flex-1 overflow-auto'>
          <MenuNav />
        </div>
      </aside>
      <div className='flex-1'>
        <div className='flex h-[50px] items-center px-4 shadow'>
          <Button onClick={handleClick}>注销</Button>
        </div>
        <div className='p-4'>{children}</div>
      </div>
    </div>
  )
}
