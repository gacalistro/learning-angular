import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { COneComponent } from "./c-one.component";

import { ButtonComponent } from "../components/button/button.component";
import { InputComponent } from "../components/input/input.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [COneComponent, ButtonComponent, InputComponent],
  exports: [COneComponent],
  imports: [CommonModule, FormsModule],
})
export class COneModule {}
