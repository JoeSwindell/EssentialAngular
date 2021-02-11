import { NgModule } from "@angular/core";
import { Repository } from "./repository";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  providers: [Repository]
})
export class ModelModule { }
