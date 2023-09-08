import { Component, Input } from "@angular/core";

@Component({
  selector: "app-c-one",
  templateUrl: "./c-one.component.html",
  styleUrls: ["./c-one.component.css"],
})
export class COneComponent {
  buttonTitle: string = "In the biningin";
  displayInput: boolean = true;
  @Input() valueOne: string = "";
  @Input() valueTwo: string = "";
  subjectList: string[] = [
    "class/components",
    "binding",
    "hooks",
    "directives",
    "extra",
  ];
  selectedItem: number = 0;
  currentStyleClass: string = "";
  textColor: string = "blue";

  selectItem(item: number) {
    this.selectedItem = item;
  }

  changeTextColor() {
    this.currentStyleClass = "pinkColor";
  }
}
