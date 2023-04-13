import mongoose, { Schema } from 'mongoose'
import { TasksStatus } from '../../constants/enum'

const TaskSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    isDeleted: { type: Boolean, default: false },
    status: {
      type: Number,
      default: TasksStatus.pending,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model('Task', TaskSchema)
