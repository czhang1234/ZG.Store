import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service'; // we will create this next!

import 'rxjs/add/operator/take'
import 'rxjs/add/operator/delay'

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  @Input() controller: string;
  @Input() id: string //e.g. for product page, the id will be product id
  @Output() onFileUploaded = new EventEmitter<string[]>();

  uploadedFiles = [];
  uploadError;
  currentStatus: number;
  uploadFieldName = 'photos';

  readonly STATUS_INITIAL = 0;
  readonly STATUS_SAVING = 1;
  readonly STATUS_SUCCESS = 2;
  readonly STATUS_FAILED = 3;

  constructor(private fileUploadService: FileUploadService) {
    this.reset(); // set initial state
  }

  filesChange(fieldName: string, fileList: FileList) {
    // handle file changes
    const formData = new FormData();

    if (!fileList.length) return;

    // append the files to FormData
    Array
      .from(Array(fileList.length).keys())
      .map(x => {
        formData.append(fieldName, fileList[x], fileList[x].name);
      });

    // save it
    this.save(formData);
  }

  reset() {
    this.currentStatus = this.STATUS_INITIAL;
    this.uploadedFiles = [];
    this.uploadError = null;
  }

  save(formData: FormData) {
    // upload data to the server
    this.currentStatus = this.STATUS_SAVING;
    this.fileUploadService.upload(formData, this.controller, this.id)
      .take(1)
      .delay(1500) // DEV ONLY: delay 1.5s to see the changes
      .subscribe(x => {
        this.uploadedFiles = [].concat(x);
        this.currentStatus = this.STATUS_SUCCESS;

        this.onFileUploaded.emit(this.uploadedFiles.map(f => f.fileName));
      }, err => {
        this.uploadError = err;
        this.currentStatus = this.STATUS_FAILED;
      })
  }
}