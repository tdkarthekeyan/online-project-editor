import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import {
    MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
    MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule,MatListModule,
     MatProgressBarModule,MatFormFieldModule, MatTooltipModule

  } from '@angular/material';
  import { MatGridListModule } from '@angular/material/grid-list';
  import { DragDropModule } from '@angular/cdk/drag-drop';
  import { MdcDrawerModule, MdcIconModule, MdcListModule, MdcCardModule, MdcTopAppBarModule, MdcIconButtonModule } from '@angular-mdc/web';
  import { NgSrcModule } from 'ng-src';
@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule, 
        MatCardModule,
        MatInputModule,
        MatDialogModule,
        MatTableModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule,
        FormsModule,
        ReactiveFormsModule,
        MatGridListModule,
        MatListModule,
        FlexLayoutModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatProgressBarModule,
        DragDropModule,
        MatFormFieldModule,
        MdcDrawerModule,
        MdcIconModule,
        MdcListModule,
        NgSrcModule,
        MdcCardModule,
        MatTooltipModule,
        MdcTopAppBarModule,
        MdcIconButtonModule
    ],
    exports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule, 
        MatCardModule,
        MatInputModule,
        MatDialogModule,
        MatTableModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule,
        FormsModule,
        ReactiveFormsModule,
        MatGridListModule,
        MatListModule,
        FlexLayoutModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatProgressBarModule,
        DragDropModule,
        MatFormFieldModule,
        MdcDrawerModule,
        MdcIconModule,
        MdcListModule,
        NgSrcModule,
        MdcCardModule,
        MatTooltipModule,
        MdcTopAppBarModule,
        MdcIconButtonModule
    ],
})
export class MaterialsModule {}