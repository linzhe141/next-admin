import { MenuNavItem } from './menu-nav-item'
import { FaAppStoreIos, FaTasks } from 'react-icons/fa'
import { MdOutlineDashboard } from 'react-icons/md'
import { IoGitPullRequestSharp } from 'react-icons/io5'
import { LiaTruckSolid } from 'react-icons/lia'
import { GiCargoCrate } from 'react-icons/gi'
const menuData = [
  { label: 'Dashboard', icon: MdOutlineDashboard, href: '/dashboard' },
  { label: 'Tasks', icon: FaTasks, href: '/task' },
  { label: 'Apps', icon: FaAppStoreIos },
  { label: 'Users' },
  {
    label: 'Requests',
    icon: IoGitPullRequestSharp,
    children: [
      { label: 'Trucks', icon: LiaTruckSolid },
      { label: 'Cargos', icon: GiCargoCrate },
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
