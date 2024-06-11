import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function RecentList() {
  return (
    <div className='space-y-8'>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='https://github.com/linzhe141.png' alt='Avatar' />
          <AvatarFallback>LZ</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>linzhe</p>
          <p className='text-sm text-muted-foreground'>linzhe141@email.com</p>
        </div>
        <div className='ml-auto font-medium'>+1,999.00</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='flex h-9 w-9 items-center justify-center space-y-0 border'>
          <AvatarImage src='https://github.com/shadcn.png' alt='Avatar' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>shadcn</p>
          <p className='text-sm text-muted-foreground'>shadcn@email.com</p>
        </div>
        <div className='ml-auto font-medium'>+3178.00</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='https://github.com/pengpen1.png' alt='Avatar' />
          <AvatarFallback>PP</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>pengpen</p>
          <p className='text-sm text-muted-foreground'>pengpen1@email.com</p>
        </div>
        <div className='ml-auto font-medium'>+299.00</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='https://github.com/antfu.png' alt='Avatar' />
          <AvatarFallback>FU</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>antfu</p>
          <p className='text-sm text-muted-foreground'>antfu@email.com</p>
        </div>
        <div className='ml-auto font-medium'>+99.00</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='https://github.com/sxzz.png' alt='Avatar' />
          <AvatarFallback>ZZ</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>sxzz</p>
          <p className='text-sm text-muted-foreground'>sxzz@email.com</p>
        </div>
        <div className='ml-auto font-medium'>+39.00</div>
      </div>
    </div>
  )
}
