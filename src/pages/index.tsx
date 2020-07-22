import Page from '../components/page'
import Section from '../components/section'
import { getPlaceholderName } from '../util/helpers'

export default () => {
  const data = []

  for (let i = 0; i < 10; i++) {
    data.push(getPlaceholderName())
  }

  return (
    <Page>
      <Section>
        <h2>Home</h2>
      </Section>
    </Page>
  )
}
