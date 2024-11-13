import { IProfile } from '../types/profile.interface'

export const getProfile = (item?: IProfile) => {
  return {
    _id: item?._id ?? '',
    name: item?.name ?? '',
    email: item?.email ?? '',
    username: item?.username ?? '',
    website_url: item?.website_url ?? '',
    role: item?.role ?? '',
    avatar: item?.avatar ?? '',
    location: item?.location ?? '',
    bio: item?.bio ?? '',
  }
}
