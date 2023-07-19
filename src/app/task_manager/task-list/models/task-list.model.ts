import { ITaskList } from 'src/app/shared/models/interface/TaskModeDTOs';

export class TaskListDTO implements ITaskList {
  taskId!: number;
  title!: string;
  description!: string;
  dueDate?: Date | undefined;
}
