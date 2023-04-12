import mongoose, { Document, Schema } from 'mongoose'
import { TaskModel } from './task.interface'
import { TasksStatus } from '../../constants/enum'

export interface ITaskModel extends TaskModel, Document {}

const TaskSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique:true
    },
    isDeleted: { type: Boolean, default: false },
    status: {
      type: Number,
      default:TasksStatus.pending
    },
  },
  {
    timestamps: true,
  },
)

export default  mongoose.model('Task', TaskSchema)
