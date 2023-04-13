import express from 'express'
import { taskController } from '../modules/tasks/tasks.controller'
import { authMiddleware } from '../middleWares/authMiddleware'
const router = express.Router()

const {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = taskController
const {protect}=authMiddleware

router.post('/', protect, createTask)
router.get('/user/:id', getAllTasks)
router.get('/:id', getTaskById)
router.patch('/:id',protect, updateTask)
router.delete('/:id',protect, deleteTask)

export default router
