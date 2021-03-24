import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  currentName: string = "";
  listOfEmployees: Array<string> = [];

  onClick() {
    this.listOfEmployees[this.listOfEmployees.length] = this.currentName;
  }
}
