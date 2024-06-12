import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table'
import { CiEdit, CiTrash } from 'react-icons/ci'
export default function Task() {
  return (
    <div className=''>
      <div className='mb-4 grid grid-cols-4 items-center gap-4'>
        <div className='flex items-center gap-4'>
          <Label htmlFor='ip-address' className='w-32'>
            登录IP地址：
          </Label>
          <Input id='ip-address' placeholder='请输入IP地址' />
        </div>
        <div className='flex items-center gap-4'>
          <Label htmlFor='operation-type' className='w-32'>
            操作类型：
          </Label>
          <Select>
            <SelectTrigger id='operation-type'>
              <SelectValue placeholder='全部' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>全部</SelectItem>
              <SelectItem value='type1'>类型一</SelectItem>
              <SelectItem value='type2'>类型二</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='flex items-center gap-4'>
          <Label htmlFor='operation-content' className='w-32'>
            操作内容：
          </Label>
          <Input id='operation-content' placeholder='请输入操作内容' />
        </div>
        <div className='flex items-center gap-4'>
          <Label htmlFor='operation-result' className='w-32'>
            操作结果：
          </Label>
          <Select>
            <SelectTrigger id='operation-result'>
              <SelectValue placeholder='全部' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>全部</SelectItem>
              <SelectItem value='success'>成功</SelectItem>
              <SelectItem value='failure'>失败</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className='mb-4 flex justify-end gap-2'>
        <Button>查询</Button>
        <Button variant='outline'>重置</Button>
      </div>
      <div className='rounded border'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>登录IP地址</TableHead>
              <TableHead>登录地点</TableHead>
              <TableHead>API地址</TableHead>
              <TableHead>API类型</TableHead>
              <TableHead>操作内容</TableHead>
              <TableHead>操作时间</TableHead>
              <TableHead>操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {new Array(10).fill(0).map((_, index) => (
              <TableRow key={index}>
                <TableCell>112.60.1.97 (广东深圳市)</TableCell>
                <TableCell>--</TableCell>
                <TableCell>/wx/User/CheckHasUser,223...</TableCell>
                <TableCell>Cookie/Token</TableCell>
                <TableCell>成功</TableCell>
                <TableCell>2024-06-07 14:01:20</TableCell>
                <TableCell>
                  <div className='flex gap-2'>
                    <CiEdit className='h-4 w-4 text-gray-500' />
                    <CiTrash className='h-4 w-4 text-gray-500' />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className='mt-4 flex items-center justify-between'>
        <div>共 63 条</div>
        <div className='flex items-center'>
          <Button variant='ghost'>上一页</Button>
          <Button variant='ghost'>1</Button>
          <Button variant='ghost'>2</Button>
          <Button variant='ghost'>3</Button>
          <Button variant='ghost'>下一页</Button>
          <Select value='10'>
            <SelectTrigger>
              <SelectValue>10条/页</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='10'>10条/页</SelectItem>
              <SelectItem value='20'>20条/页</SelectItem>
              <SelectItem value='50'>50条/页</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
