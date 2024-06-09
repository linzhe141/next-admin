import { MenuNavItem } from './menu-nav-item'

const menuData = [
  {
    label: 'test1',
    children: [
      { label: 'test1-1' },
      { label: 'test1-2' },
      { label: 'test1-3' },
    ],
  },
  { label: 'test2' },
  {
    label: 'test1',
    children: [
      { label: 'test1-1' },
      { label: 'test1-2' },
      { label: 'test1-3' },
    ],
  },
  {
    label: 'test1',
    children: [
      { label: 'test1-1' },
      { label: 'test1-2' },
      { label: 'test1-3' },
    ],
  },
  {
    label: 'test1',
    children: [
      { label: 'test1-1' },
      { label: 'test1-2' },
      { label: 'test1-3' },
    ],
  },
  {
    label: 'test1',
    children: [
      { label: 'test1-1' },
      { label: 'test1-2' },
      { label: 'test1-3' },
    ],
  },
  {
    label: 'test1',
    children: [
      { label: 'test1-1' },
      { label: 'test1-2' },
      { label: 'test1-3' },
    ],
  },
  {
    label: 'test1',
    children: [
      { label: 'test1-1' },
      { label: 'test1-2' },
      { label: 'test1-3' },
    ],
  },
  {
    label: 'test1',
    children: [
      { label: 'test1-1' },
      { label: 'test1-2' },
      { label: 'test1-3' },
    ],
  },
  {
    label: 'test1',
    children: [
      { label: 'test1-1' },
      { label: 'test1-2' },
      { label: 'test1-3' },
    ],
  },
  {
    label: 'test1',
    children: [
      { label: 'test1-1' },
      { label: 'test1-2' },
      { label: 'test1-3' },
    ],
  },
  {
    label: 'test1',
    children: [
      { label: 'test1-1' },
      { label: 'test1-2' },
      { label: 'test1-3' },
    ],
  },
  {
    label: 'test1',
    children: [
      { label: 'test1-1' },
      { label: 'test1-2' },
      { label: 'test1-3' },
    ],
  },
  {
    label: 'test1',
    children: [
      { label: 'test1-1' },
      { label: 'test1-2' },
      { label: 'test1-3' },
    ],
  },
  {
    label: 'test1',
    children: [
      { label: 'test1-1' },
      { label: 'test1-2' },
      { label: 'test1-3' },
    ],
  },
]
export function MenuNav() {
  return (
    <div>
      {menuData.map((i) => (
        <MenuNavItem {...i} key={i.label} level={1} />
      ))}
    </div>
  )
}
