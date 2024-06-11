import { TbCurrencyRenminbi } from 'react-icons/tb'
import { Overview } from './components/Overview'
import { RecentList } from './components/Recent-list'
export default function Dashboard() {
  const summaryData = [
    { title: '总计', value: '￥123,01.50' },
    { title: '总计', value: '￥123,01.50' },
    { title: '总计', value: '￥123,01.50' },
    { title: '总计', value: '￥123,01.50' },
  ]
  return (
    <div>
      <div className='flex gap-2'>
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
            <div className='text-xs text-muted-foreground'>比上个月 +20.1%</div>
          </div>
        ))}
      </div>
      <div className='mt-2 flex gap-2'>
        <div className='flex-[4] rounded border p-4 shadow'>
          <Overview />
        </div>
        <div className='flex-[3] rounded border p-4 shadow'>
          <RecentList />
        </div>
      </div>
    </div>
  )
}
