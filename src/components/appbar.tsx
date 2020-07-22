import Link from 'next/link'
import Avatar from './avatar'
import ThemeButton from './theme-button'
import { EditIcon } from './icons'
import button from '../styles/button.module.css'

const Header = () => (
  <header>
    <Link href='/profile'>
      <a title='Profile' aria-label='Profile'>
        <Avatar src='https://images.unsplash.com/photo-1593769645155-d6416081c0c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' />
      </a>
    </Link>

    <div style={{ flex: 1 }} />

    <nav>
      <ThemeButton />

      <div className='divider' />

      <button
        type='button'
        onClick={() => {
          // todo
        }}
        className={button.icon}
      >
        <EditIcon />
      </button>
    </nav>

    <style jsx>{`
      header {
        padding: 0 var(--gap);
        padding-top: env(safe-area-inset-top);
        width: 100%;
        height: calc(env(safe-area-inset-top) + 72px);
        background: var(--base);
        border-bottom: 1px solid var(--divider);
        display: flex;
        align-items: center;
        z-index: 10;
        position: fixed;
        top: 0;
        left: 0;
        transition: var(--transition-colors);
      }

      nav {
        display: flex;
        align-items: center;
        z-index: 4;
      }

      h1 {
        font-size: 18px;
      }

      .divider {
        margin: 0 var(--gap);
        width: 1px;
        height: 28px;
        background: var(--divider);
        display: flex;
        transition: var(--transition-colors);
      }
    `}</style>
  </header>
)

export default Header
