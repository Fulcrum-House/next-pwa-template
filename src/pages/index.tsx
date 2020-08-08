import Page from '../components/page'
import { getPlaceholderName } from '../util/helpers'

const Index = () => {
  const data = []

  for (let i = 0; i < 10; i++) {
    data.push(getPlaceholderName())
  }

  return (
    <Page title='Tasks'>
      <h2>Tasks</h2>

      <ul>
        {data.map((item) => (
          <li key={item}>
            <h4>{item}</h4>
          </li>
        ))}
      </ul>
    </Page>
  )
}

export default Index
