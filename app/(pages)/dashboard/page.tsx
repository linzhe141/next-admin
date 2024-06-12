import { TbCurrencyRenminbi } from 'react-icons/tb'
import { Overview } from './components/overview'
import { RecentList } from './components/recent-list'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Dashboard() {
  const summaryData = [
    { title: '总计', value: '￥123,01.50' },
    { title: '总计', value: '￥123,01.50' },
    { title: '总计', value: '￥123,01.50' },
    { title: '总计', value: '￥123,01.50' },
  ]
  return (
    <div className='rounded bg-white p-4'>
      <h2 className='mb-4 text-3xl font-bold tracking-tight'>Dashboard</h2>
      <Tabs defaultValue='Overview' className='w-full'>
        <TabsList>
          <TabsTrigger value='Overview'>Overview</TabsTrigger>
        </TabsList>
        <TabsContent value='Overview'>
          <div className='flex gap-4'>
            {summaryData.map((i) => (
              <div
                className='flex flex-1 flex-col justify-between rounded border p-4 shadow'
                key={performance.now()}
              >
                <div className='flex items-center justify-between text-sm'>
                  <div className='text-sm font-medium tracking-tight'>
                    {i.title}
                  </div>
                  <TbCurrencyRenminbi />
                </div>
                <div className='my-2 text-2xl font-bold'>{i.value}</div>
                <div className='text-xs text-muted-foreground'>
                  比上个月 +20.1%
                </div>
              </div>
            ))}
          </div>
          <div className='mt-4 flex gap-4'>
            <div className='flex-[4] rounded border p-4 shadow'>
              <div className='mb-4 flex flex-col space-y-1.5'>
                <h3 className='font-semibold leading-none tracking-tight'>
                  Overview
                </h3>
              </div>
              <Overview />
            </div>
            <div className='flex-[3] rounded border p-4 shadow'>
              <div className='mb-4 flex flex-col space-y-1.5'>
                <h3 className='font-semibold leading-none tracking-tight'>
                  Recent Sales
                </h3>
                <p className='text-sm text-muted-foreground'>
                  You made 265 sales this month.
                </p>
              </div>
              <RecentList />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
