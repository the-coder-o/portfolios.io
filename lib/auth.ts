import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth'

import { auth } from '@/firebase/firebase.config'

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider)
    const user = result.user
    console.log('Google User:', user)
    return user
  } catch (error) {
    console.error('Google Sign-In Error:', error)
    throw error
  }
}

export const signInWithGitHub = async () => {
  try {
    const result = await signInWithPopup(auth, githubProvider)
    const user = result.user
    console.log('GitHub User:', user)
    return user
  } catch (error) {
    console.error('GitHub Sign-In Error:', error)
    throw error
  }
}
