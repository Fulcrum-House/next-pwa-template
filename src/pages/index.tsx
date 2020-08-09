import Page from '../components/page'
import { getPlaceholderName } from '../util/helpers'

const Index = () => {
  const data = []

  for (let i = 0; i < 10; i++) {
    data.push({
      name: getPlaceholderName(),
      saved: !!(i === 2 || i === 5),
    })
  }

  return (
    <Page title='Tasks'>
      <ul className='space-y-1 max-w-xs'>
        {data.map(({ name, saved }) => (
          <li
            key={name}
            className='px-3 h-8 leading-none text-sm text-fg bg-ui-surface rounded-md flex items-center justify-between transition-colors duration-150 ease-in-out'
          >
            <span>{name}</span>
            <svg
              viewBox='0 0 15 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='18'
            >
              {saved ? (
                <path
                  d='M6.765 5.235a1.79 1.79 0 10-2.53 2.53L7.5 11.03l3.265-3.265a1.79 1.79 0 00-2.53-2.53L7.5 5.97l-.735-.735z'
                  fill='currentColor'
                  className='text-primary'
                />
              ) : (
                <path
                  d='M6.5 5.5l1 1 1-1a1.414 1.414 0 112 2l-3 3-3-3a1.414 1.414 0 112-2z'
                  stroke='currentColor'
                  className='text-muted'
                />
              )}
            </svg>
          </li>
        ))}
      </ul>
    </Page>
  )
}

export default Index
