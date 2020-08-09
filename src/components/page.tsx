import Head from 'next/head'
import AppBar from './app-bar'
import AppDrawer from './app-drawer'
import BottomNav from './bottom-nav'

type Props = {
  title?: string
  children: React.ReactNode
}

const Page = ({ title, children }: Props) => (
  <>
    <Head>
      <title>{title ? `Grapefruit | ${title}` : 'Grapefruit'}</title>
    </Head>

    <AppBar />
    <AppDrawer className='hidden md:flex' />

    <main
      className='md:ml-64 min-h-screen text-fg transition-colors duration-150 ease-in-out'
      style={{
        paddingTop: 'calc(env(safe-area-inset-top) + 5rem)',
        paddingBottom: 'calc(env(safe-area-inset-bottom) + 4rem)',
      }}
    >
      <div className='mx-auto p-6 max-w-6xl'>
        <h2 className='mb-6 text-lg font-medium'>{title}</h2>

        {children}
      </div>
    </main>

    <BottomNav className='flex md:hidden' />
  </>
)

export default Page
