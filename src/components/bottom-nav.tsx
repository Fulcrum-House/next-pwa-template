import Link from 'next/link'
import { useRouter } from 'next/router'
import { HomeIcon, InboxIcon, CalendarIcon, FolderIcon } from './icons'
import button from '../styles/button.module.css'

const links = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    href: '/',
  },
  {
    title: 'Inbox',
    icon: <InboxIcon />,
    href: '/inbox',
  },
  {
    title: 'Calendar',
    icon: <CalendarIcon />,
    href: '/calendar',
  },
  {
    title: 'Projects',
    icon: <FolderIcon />,
    href: '/projects',
  },
]

const BottomNav = () => {
  const { pathname } = useRouter()

  return (
    <nav>
      <div>
        {links.map((link) => (
          <Link href={link.href} key={link.title}>
            <a
              title={link.title}
              aria-label={link.title}
              className={`${button.icon} ${
                pathname === link.href ? button.active : ''
              }`}
            >
              {link.icon}
            </a>
          </Link>
        ))}
      </div>

      <style jsx>{`
        nav {
          padding-bottom: env(safe-area-inset-bottom);
          width: 100%;
          height: calc(env(safe-area-inset-top) + 72px);
          background: var(--base);
          border-top: 1px solid var(--divider);
          display: flex;
          align-items: center;
          justify-content: center;
          position: fixed;
          bottom: 0;
          transition: var(--transition-colors);
        }

        nav > div {
          width: 100%;
          max-width: 480px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
      `}</style>
    </nav>
  )
}

export default BottomNav
