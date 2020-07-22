import Page from '../components/page'
import Section from '../components/section'

function handleSubmit(event) {
  event.preventDefault()
  // todo
}

const Profile = () => (
  <Page title='Profile'>
    <Section>
      <h2>Profile</h2>
    </Section>

    <form onSubmit={(e) => handleSubmit(e)}>
      <input type='name' />
      <input type='email' />

      <button type='submit'>Update profile</button>
    </form>
  </Page>
)

export default Profile
