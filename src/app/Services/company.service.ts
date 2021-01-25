import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  company: any = {};
  project: any = {};
  private companySubject = new BehaviorSubject<any>(this.company);
  private projectSubject = new BehaviorSubject<any>(this.project);

  constructor() { }

  setCompany(company) {
    this.companySubject.next(company);
  }

  getCompany() {
    return this.companySubject.asObservable();
  }

  // setProject(project) {
  //   this.projectSubject.next(project);
  // }

  // getProject() {
  //   return this.projectSubject.asObservable();
  // }

  setProject(project) {
    localStorage.setItem('project', JSON.stringify(project));
  }

  getProject() {
    return JSON.parse(localStorage.getItem('project'));
  }

  setDocument(project) {
    localStorage.setItem('document', JSON.stringify(project));
  }

  getDocument() {
    return JSON.parse(localStorage.getItem('document'));
  }

  setStaff(project) {
    localStorage.setItem('staff', JSON.stringify(project));
  }

  getStaff() {
    return JSON.parse(localStorage.getItem('staff'));
  }

  setTender(tender) {
    localStorage.setItem('tender', JSON.stringify(tender));
  }

  getTender() {
    return JSON.parse(localStorage.getItem('tender'));
  }

  setSub(sub) {
    localStorage.setItem('sub', JSON.stringify(sub));
  }

  getSub() {
    return JSON.parse(localStorage.getItem('sub'));
  }
}
