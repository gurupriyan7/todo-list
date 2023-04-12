import { Request, Response } from 'express'
import { taskService } from './tasks.service'

const createTask = async (req: Request, res: Response) => {
  try {
    const data = await taskService.createTask(req.body)
    res.status(201).json(data)
  } catch (error) {
    res.status(400)
    res.status(400).json(error.message)
  }
}

const getAllTasks = async (req: Request, res: Response) => {
  try {
    const data = await taskService.getAllTasks()
    res.status(200).json(data)
  } catch (error) {
    res.status(400)
    res.status(400).json(error.message)
  }
}

const getTaskById = async (req: Request, res: Response) => {
  try {
    const data = await taskService.getTaskById(req.params.id)
    res.status(200).json(data)
  } catch (error) {
    res.status(400)
    res.status(400).json(error.message)
  }
}

const updateTask = async (req: Request, res: Response) => {
  try {
    const data = await taskService.updateTask(req.params.id, req.body)
    res.status(200).json(data)
  } catch (error) {
    res.status(400)
    res.status(400).json(error.message)
  }
}

const deleteTask = async (req: Request, res: Response) => {
  try {
    const data = await taskService.deleteTask(req.params.id)
    res.status(200).json(data)
  } catch (error) {
    res.status(400)
    res.status(400).json(error.message)
  }
}

export const taskController = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
}
