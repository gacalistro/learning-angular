import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CTwoComponent } from "./c-two.component";

@NgModule({
  declarations: [CTwoComponent],
  exports: [CTwoComponent],
  imports: [CommonModule],
})
export class CTwoModule {}
