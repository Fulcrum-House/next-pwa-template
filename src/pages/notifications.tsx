import Page from '../components/page'

const Notifications = () => (
  <Page title='Notifications'>
    <ul className='space-y-1 max-w-xs'>
      <li className='px-3 h-8 leading-none text-sm text-fg bg-ui-surface rounded-md flex items-center transition-colors duration-150 ease-in-out'>
        <span>
          Glued together by{' '}
          <a
            href='https://twitter.com/mvllow'
            target='_blank'
            rel='noreferrer'
            className='text-primary transition-colors duration-150 ease-in-out'
          >
            @mvllow
          </a>
        </span>
      </li>
    </ul>
  </Page>
)

export default Notifications
