export const getAllTasks = () => 'api/Tasks/GetTasks';
export const setInactiveTask = (taskId: number) =>
  'api/Tasks/InactiveTask/' + taskId;
export const getSelectedTask = (taskId: number) =>
  'api/Tasks/GetSingleTask/' + taskId;
export const updateSelectedTask = (taskId: number) =>
  'api/Tasks/UpdateTask/' + taskId;
