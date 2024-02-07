import { Component, OnInit } from '@angular/core';
import { ExcelService } from '../../../ExcelService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrl: './excel.component.css',
})
export class ExcelComponent implements OnInit {
  constructor(private excelService: ExcelService, private router: Router) {}

  ngOnInit(): void {
    this.saveExcel();
  }

  saveExcel(): void {
    var data: string;
    this.excelService.getExcel().subscribe((result) => {
      const byteCharacters = atob(result.base64);
      const byteNumbers = new Array(byteCharacters.length);

      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });

      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      const datum = Date.now();
      downloadLink.download = 'Inventurliste.xlsx';

      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      setTimeout(() => {
        this.router.navigate(['/zutaten']);
      }, 750);
    });
  }
}
