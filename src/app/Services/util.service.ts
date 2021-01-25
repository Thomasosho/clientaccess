import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
// import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  clientSecret: 'manamite';

  constructor(
    private crudService: CrudService,
  ) { }

  setToken(token) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  getUser() {
    return localStorage.getItem('user');
  }
  setUser(user) {
    localStorage.setItem('user', user);
  }

  getUserObj() {
    return JSON.parse(localStorage.getItem('userObj'));
  }
  setUserObj(userObj) {
    localStorage.setItem('userObj', JSON.stringify(userObj));
  }

  setProject(project) {
    localStorage.setItem('project', project);
  }

  getProject() {
    localStorage.getItem('project');
  }

  clearStorage() {
    // localStorage.removeItem('user');
    // localStorage.removeItem('token');
    // localStorage.removeItem('email');
    localStorage.clear();
  }
  getEmail() {
    return localStorage.getItem('email');
  }
  setEmail(email) {
    localStorage.setItem('email', email);
  }
  setRoles(roles) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  getRoles() {
    return JSON.parse(localStorage.getItem('roles'));
  }
  setCompany(company) {
    localStorage.setItem('company', JSON.stringify(company));
  }

  getCompany() {
    return JSON.parse(localStorage.getItem('company'));
  }

  setTender(tender) {
    localStorage.setItem('tender', JSON.stringify(tender));
  }

  getTender() {
    return JSON.parse(localStorage.getItem('tender'));
  }

  getProfile() {
    const roles = this.getRoles();
    const role = roles[0].toLowerCase();
    const userId = this.getUser();
    const token = this.getToken();
    const url = `api/${role}/get/${userId}`;
    return this.crudService.getRequestImAuth(url, token);
  }

  getNotification() {
    const userId = Number(this.getUser());
    return this.crudService.getRequest(`notification/allNotificationByUserId/${userId}`);
  }

  getSubscription() {
    return JSON.parse(localStorage.getItem('sub'));
  }
  setSubscription(sub) {
    localStorage.setItem('sub', JSON.stringify(sub));
  }

  // encryptData(dataToEncrypt, storageName) {
  //   const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(dataToEncrypt), this.clientSecret).toString();
  //   localStorage.setItem(storageName, encryptedData);
  // }

  // decryptData(dataToDeCrypt) {
  //   const bytes = CryptoJS.AES.decrypt(localStorage.getItem(dataToDeCrypt), this.clientSecret);
  //   const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  //   return decryptedData;
  // }
}
