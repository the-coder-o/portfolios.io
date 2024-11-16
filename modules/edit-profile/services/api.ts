import http from '@/services/api'

import { EditPassword, ProfileEdit } from '../types/profile.interface'

export const UserProfileList = async () => {
  return http.get('/profile/me')
}

export const EditUserProfileMe = async (values: ProfileEdit) => {
  return await http.put(`/profile`, values)
}

export const EditUserPassword = async (values: EditPassword) => {
  return await http.put(`/profile/password`, values)
}
