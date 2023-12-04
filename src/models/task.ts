import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
  task: { type: String }
})

taskSchema.set('toJSON', { virtuals: true })

export default mongoose.model('Tasks', taskSchema)