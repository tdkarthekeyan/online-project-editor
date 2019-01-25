import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload/upload.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../upload/dialog/dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
title = 'Online Project Editor' ;
  constructor(private Upload: UploadService, public dialog: MatDialog, public uploadService: UploadService) { }
  public openUploadDialog() {
    let dialogRef = this.dialog.open(DialogComponent, { width: '50%', height: '50%' });
  }
  ngOnInit() {  
  }
}
