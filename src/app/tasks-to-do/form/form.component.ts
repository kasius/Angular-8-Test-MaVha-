import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Services
import { TaskService } from '../../services/task.service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: []
})
export class FormComponent implements OnInit {

  // declaraciones
  public formTask: FormGroup = this.initForm();
  public fileSelected = null;
  public fileData = null;
  public loading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private taskService: TaskService
  ) { }

  ngOnInit() {
  }

  // iniciamos formulario task
  public initForm() {
    return this.fb.group({
      id: null,
      description: [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(1000)])],
      state: null,
      file: null
    });
  }

  // enviamos formulñario a API
  public sendForm(form: any): void {
    this.loading = true;
    const formData = new FormData();
    formData.append('file', this.fileData);
    formData.append('description', form.description);
    formData.append('state', form.state);
    formData.append('type', this.fileData.type);
    form.file = this.fileSelected;
    this.taskService.postTask(formData)
      .pipe(
        take(1)
      )
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/tasks-to-do/list']);
          this.loading = false;
        },
        err => {
          console.log(err);
          this.loading = false;
          alert('Error al guardar formulario!, intentalo más tarde.');
        }
      );
  }

  public handleFileInput(event) {
    const reader = new FileReader();
    this.fileData = event.target.files[0];

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.fileSelected = reader.result;
      };
    }
  }
}
