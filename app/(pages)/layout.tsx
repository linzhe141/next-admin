'use client'
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
    <div>
      <div className='flex h-[50px] items-center border-b border-slate-200 px-4'>
        <Button onClick={handleClick}>注销</Button>
      </div>
      <div>{children}</div>
    </div>
  )
}
