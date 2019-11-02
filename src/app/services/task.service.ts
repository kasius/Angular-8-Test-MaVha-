import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService, BASE_URL_CRUD } from '../app.service';

@Injectable()
export class TaskService extends AppService {

  constructor(http: HttpClient) {
    super(http);
  }

  getAll() {
    this.endpoint = `${BASE_URL_CRUD}/taks-to-do`;
    return this.get(this.endpoint);
  }

  getById(taskId: string) {
    this.endpoint = `/taks-to-do/${taskId}`;
    return this.get(this.endpoint);
  }

  postTask(task: any) {
    this.endpoint = `${BASE_URL_CRUD}/taks-to-do`;
    return this.post2(this.endpoint, task);
  }

  putTaskState(task: any) {
    this.endpoint = `${BASE_URL_CRUD}/taks-to-do/${task._id}`;
    return this.put(this.endpoint, task);
  }
}
