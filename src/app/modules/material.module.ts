import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from "@angular/material/dialog";
import { AsyncPipe, CommonModule } from "@angular/common";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

const matModules = [
  AsyncPipe,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatStepperModule,
  MatRadioModule,
  MatButtonModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatTableModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSortModule,
  MatDatepickerModule,
  MatSlideToggleModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatAccordion,
  ReactiveFormsModule,
  CommonModule,
  FormsModule,
]

@NgModule({
  imports: matModules,
  exports: matModules
})
export class MaterialModules { }