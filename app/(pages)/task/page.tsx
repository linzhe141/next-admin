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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

export default function Task() {
  return (
    <div className=''>
      <div className='rounded bg-white p-4'>
        <div className='mb-4 grid grid-cols-2 items-center gap-4 md:grid-cols-3 lg:grid-cols-4'>
          <div className='flex items-center gap-4'>
            <Label htmlFor='ip-address' className='w-32 text-[#333]'>
              登录IP地址：
            </Label>
            <Input id='ip-address' placeholder='请输入IP地址' />
          </div>
          <div className='flex items-center gap-4'>
            <Label htmlFor='operation-type' className='w-32 text-[#333]'>
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
            <Label htmlFor='operation-content' className='w-32 text-[#333]'>
              操作内容：
            </Label>
            <Input id='operation-content' placeholder='请输入操作内容' />
          </div>
          <div className='flex items-center gap-4'>
            <Label htmlFor='operation-result' className='w-32 text-[#333]'>
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
        <div className='flex justify-end gap-2'>
          <Button>查询</Button>
          <Button variant='outline'>重置</Button>
        </div>
      </div>
      <div className='mt-4 rounded bg-white p-4'>
        <Table className='rounded border'>
          <TableHeader className='bg-[#f2f2f2]'>
            <TableRow>
              <TableHead className='border-r text-sm font-bold text-[#333]'>
                登录IP地址
              </TableHead>
              <TableHead className='border-r text-sm font-bold text-[#333]'>
                登录地点
              </TableHead>
              <TableHead className='border-r text-sm font-bold text-[#333]'>
                API地址
              </TableHead>
              <TableHead className='border-r text-sm font-bold text-[#333]'>
                API类型
              </TableHead>
              <TableHead className='border-r text-sm font-bold text-[#333]'>
                操作内容
              </TableHead>
              <TableHead className='border-r text-sm font-bold text-[#333]'>
                操作时间
              </TableHead>
              <TableHead className='text-sm font-bold text-[#333]'>
                操作
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {new Array(10).fill(0).map((_, index) => (
              <TableRow key={index} className='leading-8'>
                <TableCell className='border-r'>
                  112.60.1.97 (广东深圳市)
                </TableCell>
                <TableCell className='border-r'>--</TableCell>
                <TableCell className='border-r'>
                  /wx/User/CheckHasUser,223...
                </TableCell>
                <TableCell className='border-r'>Cookie/Token</TableCell>
                <TableCell className='border-r'>成功</TableCell>
                <TableCell className='border-r'>2024-06-07 14:01:20</TableCell>
                <TableCell>
                  <div className='flex gap-2'>
                    <CiEdit className='h-4 w-4 cursor-pointer text-[#10182b]' />
                    <CiTrash className='h-4 w-4 cursor-pointer text-[#10182b]' />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className='mt-4 flex items-center justify-between'>
          <div className='text-sm'>共 63 条</div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href='#' className='border' />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href='#' className='border'>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href='#' className='border' />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  )
}
