import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LinkifyPipe } from "../pipes/linkify.pipe";
// import { NgxCleaveDirectiveModule } from "ngx-cleave-directive";

const shModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  LinkifyPipe,
  // NgxCleaveDirectiveModule
]

@NgModule({
  imports: shModules,
  exports: shModules
})
export class SharedModules { }