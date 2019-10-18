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
    const report = createReport({
      template: "assets/test.docx",
      output: "output.docx",
      data: {}
    });
    console.log(report);

    // const blob = new Blob(report, {
    //   type: "text/plain;charset=utf-8"
    // });
    // saveAs(blob, "abc.docx");

    this.saveDataToFile(
      report,
      "report.docx",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    );
  }

  saveDataToFile = (data, fileName, mimeType) => {
    const blob = new Blob([data], { type: mimeType });
    const url = window.URL.createObjectURL(blob);
    this.downloadURL(url, fileName);
    setTimeout(() => {
      window.URL.revokeObjectURL(url);
    }, 1000);
  };

  downloadURL = (data, fileName) => {
    const a = document.createElement("a");
    a.href = data;
    a.download = fileName;
    document.body.appendChild(a);
     a.style.display = 'none';
    a.click();
    a.remove();
  };
}
