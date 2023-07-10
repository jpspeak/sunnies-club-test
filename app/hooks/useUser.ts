import useSWR from 'swr'
import authService from '../services/api/authService'

type User = {
  _id: string
  email: string
  firstname: string
  lastname: string
  birthday: string
  points: number
  brandsAccounts: { email: string }[]
}

const useUser = () => {
  const {
    data: user,
    error: errorUser,
    isLoading: isLoadingUser,
    mutate: mutateUser
  } = useSWR<User>('users/me', () => authService.me().then((res) => res.data))

  return { user, errorUser, isLoadingUser, mutateUser }
}
export default useUser
