'use client'
import { MenuNav } from '@/components/menu-nav'
import { Button } from '@/components/ui/button'
import { logout } from '@/lib/actions'
import { useRouter } from 'next/navigation'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

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
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='16'
              ></line>
              <line
                x1='192'
                y1='40'
                x2='40'
                y2='192'
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='16'
              ></line>
            </svg>
            <div className='visible flex w-auto flex-col justify-end truncate'>
              <span className='font-medium'>Next Admin</span>
            </div>
          </div>
        </div>
        <ScrollArea className='h-0 flex-1'>
          <MenuNav />
        </ScrollArea>
      </aside>
      <div className='flex-1 bg-[#f5f5f5]'>
        <div className='flex h-[50px] items-center justify-between bg-white px-4 shadow'>
          <div></div>
          <div className='mr-1'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant='ghost'
                  className='relative h-8 w-8 rounded-full'
                >
                  <Avatar className='size-8'>
                    <AvatarImage src='https://github.com/linzhe141.png' />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-56' align='end' forceMount>
                <DropdownMenuLabel className='font-normal'>
                  <div className='flex flex-col space-y-1'>
                    <p className='text-sm font-medium leading-none'>linzhe</p>
                    <p className='text-xs leading-none text-muted-foreground'>
                      linzhe141@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>New Team</DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={handleClick}
                    className='cursor-pointer'
                  >
                    注销
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className='p-4'>{children}</div>
      </div>
    </div>
  )
}
