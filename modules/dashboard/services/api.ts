import http from '@/services/api'
import { CreatePortfolio } from '@/modules/dashboard/types/create-portfolio'

interface UploadImageResponse {
  url: string
  filename: string
}

export const uploadImage = async (folder: string, file: File) => {
  const formData = new FormData()
  formData.append('file', file)

  try {
    const response: any = await http.post<UploadImageResponse>(`/upload?folder=${folder}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return response?.data?.data
  } catch (error) {
    console.error('Error uploading image:', error)
    throw error
  }
}

export const createPortfolio = async (portfolioData: CreatePortfolio) => {
  return await http.post('/portfolio', portfolioData)
}

export const GetPortfolios = async () => {
  return await http.get('/portfolio')
}
