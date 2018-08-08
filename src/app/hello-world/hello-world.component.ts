import { Component } from "@angular/core";

@Component({
  selector: "mp-hello-world",
  templateUrl: "./hello-world.component.html",
  styleUrls: ["./hello-world.component.css"]
})
export class HelloWorldComponent {
  minutes = 0;
  gender = "female";
  fly = true;
  logo = "https://angular.io/assets/images/logos/angular/angular.png";
  heroes: string[] = ["Magneta", "Celeritas", "Dynama"];
  inc(i: number) {
    this.minutes = Math.min(5, Math.max(0, this.minutes + i));
  }
  male() {
    this.gender = "male";
  }
  female() {
    this.gender = "female";
  }
  other() {
    this.gender = "other";
  }
  today: number = Date.now();
  a: number = 0.259;
  b: number = 1.3495;

  pi: number = 3.14;
  e: number = 2.718281828459045;
}
