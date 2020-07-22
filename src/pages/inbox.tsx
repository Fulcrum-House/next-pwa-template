import Page from '../components/page'
import Section from '../components/section'
import Avatar from '../components/avatar'
import { getPlaceholderName } from '../util/helpers'

const Inbox = () => {
  const data = []

  for (let i = 0; i < 10; i++) {
    data.push(getPlaceholderName())
  }

  return (
    <Page title='Inbox'>
      <Section>
        <h2>Inbox</h2>
      </Section>

      <ul className='list'>
        {data.map((item) => (
          <li key={item}>
            <Avatar>{item}</Avatar>
            <h4>{item}</h4>
          </li>
        ))}
      </ul>

      <style jsx>{`
        li {
          color: var(--fg);
          padding: var(--gap-small);
          background: var(--base);
          display: flex;
          align-items: center;
          transition: var(--transition-colors);
        }

        li:not(:last-child) {
          border-bottom: 1px solid var(--divider);
        }

        h4 {
          color: var(--fg);
          margin-left: var(--gap-small);
          font-weight: 500;
          letter-spacing: 0.0035em;
        }
      `}</style>
    </Page>
  )
}

export default Inbox
