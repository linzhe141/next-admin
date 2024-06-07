import { z } from 'zod'
export const formSchema = z.object({
  username: z.string().min(1, {
    message: '请输入用户名！',
  }),
  password: z.string().min(1, {
    message: '请输入密码！',
  }),
})
