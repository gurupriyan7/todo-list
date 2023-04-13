import { CreateTask } from './task.interface'
import TaskModel from './Task.model'
import userModel from '../user/user.model'

const createTask = async (userData:any,createTaskData: CreateTask) => {
  return await TaskModel.create({...createTaskData,userId:userData._id})
}

const getAllTasks = async(userId:string)=>{
return await TaskModel.find({userId})
  
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
  const task = await TaskModel.findById(taskId)
  if(!task){
    throw new Error("Task not found")
  }

  return await TaskModel.deleteOne({taskId})
}



export const taskService = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask
}
