import { Injectable } from '@angular/core';
import { TaskListDTO } from '../models/task-list.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../../environments/environment';
import {
  getAllTasks,
  getSelectedTask,
  setInactiveTask,
  updateSelectedTask,
} from '../../../shared/services/endpoints/TaskList.endpoints';

@Injectable({
  providedIn: 'root',
})
export class TaskListService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<TaskListDTO[]> {
    return this.http.get<TaskListDTO[]>(env.apiUrl + getAllTasks());
  }
  updateTask(task: TaskListDTO): Observable<TaskListDTO> {
    debugger;
    return this.http.put<TaskListDTO>(
      env.apiUrl + updateSelectedTask(task.taskId),
      task
    );
  }
  inactiveTask(task: any): Observable<boolean> {
    return this.http.put<boolean>(
      env.apiUrl + setInactiveTask(task.taskId),
      task
    );
  }

  getSingleTask(taskId: number) {
    return this.http.get<TaskListDTO>(env.apiUrl + getSelectedTask(taskId));
  }
}
