import { atom } from 'recoil'



export const UserAtom = atom<IUser | null>({
  key: 'user-atom',
  default: null
})
