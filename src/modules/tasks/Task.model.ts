import mongoose, { Document, Schema } from 'mongoose'
import { TaskModel } from './task.interface'
import { TasksStatus } from '../../constants/enum'
import { boolean } from 'joi'

export interface ITaskModel extends TaskModel, Document {}

const TaskSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      required: true,
    },
    status: {
      type: TasksStatus,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('Task', TaskSchema)
