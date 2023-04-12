import { CreateTask } from './task.interface'
import TaskModel from './Task.model'

const createTask = async (createTaskData: CreateTask) => {
  return await TaskModel.create(createTaskData)
}

const getAllTasks = async()=>{
  return await TaskModel.find()
}

const getTaskById = async(taskId:string)=>{
  return await TaskModel.findById(taskId)
}

const updateTask=async(taskId:string,taskData:Partial<CreateTask>)=>{
   return await TaskModel.findByIdAndUpdate(taskId,taskData,{
    new:true
   })
}

const deleteTask = async(taskId:string)=>{
  return await TaskModel.deleteOne({taskId})
}

export const taskService = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask
}
