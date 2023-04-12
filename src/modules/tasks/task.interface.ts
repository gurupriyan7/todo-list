import { TasksStatus } from '../../constants/enum'

export interface CreateTask{
  name: string
  isDeleted: boolean
  status: TasksStatus
}