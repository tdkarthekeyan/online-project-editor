import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import {
    MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
    MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule,MatListModule,
     MatProgressBarModule,MatFormFieldModule

  } from '@angular/material';
  import { MatGridListModule } from '@angular/material/grid-list';
  import { DragDropModule } from '@angular/cdk/drag-drop';
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
        MatGridListModule,
        MatListModule,
        FlexLayoutModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatProgressBarModule,
        DragDropModule,
        MatFormFieldModule
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
        MatGridListModule,
        MatListModule,
        FlexLayoutModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatProgressBarModule,
        DragDropModule,
        MatFormFieldModule
    ],
})
export class MaterialsModule {}