import Page from '../components/page'

const Notifications = () => (
  <Page title='Notifications'>
    <ul className='space-y-1 max-w-xs'>
      <li className='px-3 h-8 leading-none text-sm bg-ui-surface rounded-md flex items-center'>
        <span>
          Glued together by{' '}
          <a
            href='https://twitter.com/mvllow'
            target='_blank'
            rel='noreferrer'
            className='text-primary'
          >
            @mvllow
          </a>
        </span>
      </li>
    </ul>
  </Page>
)

export default Notifications
