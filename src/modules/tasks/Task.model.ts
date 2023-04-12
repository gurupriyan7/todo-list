import mongoose, { Document, Schema } from 'mongoose'
import { TasksStatus } from '../../constants/enum'


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
