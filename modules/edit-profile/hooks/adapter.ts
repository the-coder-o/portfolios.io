import { IProfile } from '../types/profile.interface'

export const getProfile = (item?: IProfile) => {
  return {
    _id: item?._id ?? '',
    name: item?.name ?? '',
    email: item?.email ?? '',
    username: item?.username ?? '',
    website_name: item?.website_name ?? '',
    avatar: item?.avatar ?? '',
    location: item?.location ?? '',
    bio: item?.bio ?? '',
  }
}
