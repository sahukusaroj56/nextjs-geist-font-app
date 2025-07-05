import { Component } from '@angular/core';

interface Student {
  no: string;
  name: string;
  rollNum: string;
  class: string;
  accomType: string;
  transport: string;
  location: string;
  contact: string;
  rank: string;
  points: string;
}

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent {
  students: Student[] = [];
  filteredStudents: Student[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages: number = 1;

  constructor() {
    this.students = this.generateMockStudents(50);
    this.filteredStudents = [...this.students];
    this.totalPages = Math.ceil(this.filteredStudents.length / this.pageSize);
  }

  generateMockStudents(count: number): Student[] {
    const students: Student[] = [];
    for (let i = 1; i <= count; i++) {
      students.push({
        no: i.toString().padStart(2, '0'),
        name: 'Sophia Wilson',
        rollNum: '522bcs009',
        class: '12 - A',
        accomType: 'Hosteller',
        transport: 'No',
        location: 'Singanallur',
        contact: '82486 69086',
        rank: '001',
        points: '28980'
      });
    }
    return students;
  }

  search() {
    const term = this.searchTerm.toLowerCase();
    this.filteredStudents = this.students.filter(s =>
      s.name.toLowerCase().includes(term) || s.rollNum.toLowerCase().includes(term)
    );
    this.currentPage = 1;
    this.totalPages = Math.ceil(this.filteredStudents.length / this.pageSize);
  }

  get pagedStudents(): Student[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredStudents.slice(start, start + this.pageSize);
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
  }
}
