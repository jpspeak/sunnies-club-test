import useSWR from 'swr'
import authService from '../services/api/authService'

type User = {
  _id: string
  email: string
  secondaryEmail?: string
  firstname: string
  lastname: string
  birthdate: string
  points: number
  brandsAccounts: { email: string }[]
  mobileNumber?: string
  createdAt: string
  updatedAt: string
}

const useUser = () => {
  const {
    data: user,
    error: errorUser,
    isLoading: isLoadingUser,
    mutate: mutateUser
  } = useSWR<User>('/auth/user', () =>
    authService.getAuthUser().then((res) => res.data)
  )

  return { user, errorUser, isLoadingUser, mutateUser }
}
export default useUser
