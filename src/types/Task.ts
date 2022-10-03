import { User } from './User';

export interface Task {
  title: string
  id: number
  state: 'open' | 'closed'
  created_at: string
  user: User
  comments: number
}
