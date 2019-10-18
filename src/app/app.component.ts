import { Component } from "@angular/core";
import createReport from "docx-templates";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  download() {
    console.log(createReport);

    createReport({
      template: "../assets/test.docxF",
      output: "output.docx",
      data: {'test':'this is test data'}
    });
  }
}
