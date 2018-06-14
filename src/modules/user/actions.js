import { userTypes } from './'

const signIn = (value) => ({
  type: userTypes.SIGN_IN,
  value
})

const signOut = (value) => ({
  type: userTypes.SIGN_OUT,
  value
})

export default { signIn, signOut }