import { Component } from "@angular/core";
import createReport from "docx-templates";
import { saveAs } from "file-saver";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  download() {

    // const report = await createReport({
    //   template: "../assets/test.docx",
    //   output: "output.docx",
    //   data: {}
    // });
    // console.log(report);

    const blob = new Blob(['testing'], {
      type:
        "text/plain;charset=utf-8"
    });
    // saveAs(blob, "abc.docx");
  }
}
