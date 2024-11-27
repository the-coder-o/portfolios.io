import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

import { auth } from '@/firebase/firebase.config'

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider)
    const user = result.user
    return user
  } catch (error) {
    throw error
  }
}

export const signInWithGitHub = async () => {
  try {
    const result = await signInWithPopup(auth, githubProvider)
    const user = result.user
    return user
  } catch (error) {
    throw error
  }
}
