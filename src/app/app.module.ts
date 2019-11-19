import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ListComponent } from "./list/list.component";

import { EmployeeService } from "./employee.service";

@NgModule({
  declarations: [AppComponent, ListComponent],
  imports: [BrowserModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
