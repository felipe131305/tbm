import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private env: string;
  constructor(private _http: HttpClient) {
    this.env = environment.APP_URL;
  }

  registerTaks(task: any) {
    return this._http.post<any>(this.env + 'task/save', task);
  }

  updateTaks(task: any) {
    return this._http.put<any>(this.env + 'task/update', task);
  }

  deleteTaks(task: any) {
    return this._http.delete<any>(this.env + 'task//delete/' + task._id);
  }

  listTask() {
    return this._http.get<any>(this.env + 'task/list');
  }

}
