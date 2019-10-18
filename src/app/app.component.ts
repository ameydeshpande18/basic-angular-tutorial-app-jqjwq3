import { Component } from "@angular/core";
import createReport from "docx-templates";
import { saveAs } from "file-saver";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  async download() {
    console.log(createReport);

    const report = await createReport({
      template: "../assets/test.docx",
      output: "output.docx",
      data: { test: "this is test data" }
    });
    const blob = new Blob([report], {
      type:
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    });
    saveAs(blob, "abc.docx");
  }
}
