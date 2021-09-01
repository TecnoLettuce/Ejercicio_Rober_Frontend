import { Component } from '@angular/core';
import { UploadServiceService } from "./upload-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  filename = '';

  imageSource = '';

  title = 'ejercicio-rober-frontend';

  constructor(private uploadService: UploadServiceService) {}

  setFileName(files : any){
    if (files[0]) {
      this.filename = files[0].name;
    }
  }

  save(files : any) {

    console.log('Estoy dentro del método save');
    console.log('El fichero se llama '+files[0].name)

    const formData = new FormData();

    if (files[0]) {
      formData.append(files[0].names, files[0]);
    }

    this.uploadService.upload(formData).subscribe(({ path }) => (this.imageSource = path));

  }

}
