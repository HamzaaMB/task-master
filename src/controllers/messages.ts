import { Request, Response } from 'express';
import Tasks from '../models/task'

export const addTask = async (req: any, res: any) => {
  try {
    const addTask = { ...req.body }
    const taskToAdd = await Tasks.create(addTask)
    return res.status(201).json(taskToAdd)
  } catch (err) {
    console.log(err)
    return res.status(422).json(err)
  }
}

export const getAllTasks = async (_req: any, res: any) => {
  try {
    const tasks = await Tasks.find()
    return res.status(200).json(tasks)

  } catch (err) {
    console.log(err)
    return res.status(404).json({ 'message': 'Not found' })
  }
}

export const deleteTask = async (req: any, res: any) => {
  try {
    const taskId = req.params.id;

    // Check if the task exists
    const existingTask = await Tasks.findById(taskId);
    if (!existingTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Delete the task
    await Tasks.findByIdAndDelete(taskId);

    // Optionally, you can return the deleted task or a success message
    return res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Error deleting task:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};