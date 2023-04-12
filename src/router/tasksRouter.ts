import express from 'express'
import { taskController } from '../modules/tasks/tasks.controller';
const router = express.Router()

const {createTask,getAllTasks,getTaskById,updateTask,deleteTask}=taskController

router.post("/",createTask)
router.get("/",getAllTasks)
router.get("/:id",getTaskById)
router.patch("/:id",updateTask)
router.delete("/:id",deleteTask)

export default router;
