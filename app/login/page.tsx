'use client'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { formSchema } from '@/schemas/login'
import { login } from '@/lib/actions'
import { useState } from 'react'

export default function Login() {
  const router = useRouter()
  const [formError, setFormError] = useState<string | undefined>('')
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const message = await login(data)
    setFormError(message)
    if (!message) {
      router.push('/dashboard')
    }
  }
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className={cn('w-[400px] rounded-lg bg-slate-100 p-4 shadow-lg')}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>用户名</FormLabel>
                  <FormControl>
                    <Input placeholder='请输入用户名' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>密码</FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='请输入密码'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {formError && (
              <span className='flex w-full items-center justify-center gap-2 rounded-md bg-destructive/15 p-1 text-sm text-destructive shadow-sm'>
                {formError}
              </span>
            )}
            <Button>登录</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
