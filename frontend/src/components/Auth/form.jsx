
export default function form(props) {
  return (
    <form>
      <input type='text' placeholder='username' />
      <input type='password' placeholder='password' />

      {!props.isRegistered && <input type='password' placeholder='Confirm Password' /> }

      <button type='submit'>
        {props.isRegistered == 'true' ? 'Login' : 'Create Account'}
      </button>
    </form>
  )
}

