import { Component, OnInit } from '@angular/core';
import { take, map } from 'rxjs/operators';

// Models
import { Task } from '../../models/task.model';

// Services
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  // declaraciones
  public taskList: Task[] = [];
  public loading = false;

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.getTasks();
  }

  // obtenemos tareas por desarrollar
  public getTasks() {
    this.loading = true;
    this.taskService.getAll()
      .pipe(
        take(1),
      )
      .subscribe(
        res => {
          this.taskList = res;
          this.loading = false;
        },
        err => {
          console.log(err);
          this.loading = false;
        });
  }

  // guardamos cambio de estado en tarea
  public saveState(task: Task) {
    this.loading = true;
    this.taskService.putTaskState(task)
      .pipe(
        take(1)
      )
      .subscribe(
        res => {
          console.log(res);
          this.loading = false;
          alert('cambio de estado exitoso!!!');
        },
        err => {
          console.log(err);
          this.loading = false;
          alert('error al cambiar estado, intentetalo más tarde');
        }
      );
  }

  public bufferToBase64(buf) {
    const binstr = Array.prototype.map.call(buf, (ch) => {
      return String.fromCharCode(ch);
    }).join('');
    return btoa(binstr);
  }

  public donwloadFile(task: any) {
    const linkSource = `data:${task.file.contentType};base64,${this.bufferToBase64(task.file.data.data)}`;
    const downloadLink = document.createElement('a');
    const splitType = task.file.contentType.split('/');
    const fileName = `archivo.${splitType[1]}`;

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }


}
