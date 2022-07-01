import { Component, OnInit } from '@angular/core';

interface Student {
  firstname: string;
  lastname: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  students: Student[] = [
    { firstname: 'Diletta', lastname: 'Leotta'},
    { firstname: 'Giacomo', lastname: 'Leopardi'},
    { firstname: 'Alesandro', lastname: 'Manzoni'},
    { firstname: 'Dante', lastname: 'Alighieri'},
    { firstname: 'Carlo', lastname: 'Magno'},
    { firstname: 'Marco', lastname: 'Polo'},
  ];

  filteredStudents = this.students;

  text = '';

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    //this.filteredStudents = this.students.filter(x => x.firstname.toLowerCase().includes())
  }

}
