import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bootstrap-form',
  templateUrl: './bootstrap-form.component.html',
  styleUrls: ['./bootstrap-form.component.scss']
})
export class BootstrapFormComponent implements OnInit {
  @ViewChild('form') form!: ElementRef; // 1

  constructor() { }

  ngOnInit(): void {
  }

  save() {  // la richiamiamo nell'html
    this.form.nativeElement.checkValidity();
    this.form.nativeElement.classList.add('was-validated');
  }
}
