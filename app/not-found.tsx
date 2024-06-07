'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
export default function NotFound() {
  const router = useRouter()
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <h1 className='text-[7rem] font-bold leading-tight'>404</h1>
      <span>哎呀！找不到网页！</span>
      <p>似乎是您要找的页面不存在或可能已被删除。</p>
      <Button onClick={() => router.back()} className='my-4'>
        返回
      </Button>
    </div>
  )
}
