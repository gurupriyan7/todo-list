import { TasksStatus } from '../../constants/enum'

export interface TaskModel {
  name: string
  isDeleted?: boolean
  status?: TasksStatus
}

export interface CreateTask{
  name: string
  isDeleted: boolean
  status: TasksStatus

}