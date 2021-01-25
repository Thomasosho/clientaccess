import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EngagementService {

  profileBehaviour: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor() { }
  get selectedProfile() {
    return this.profileBehaviour.asObservable();
  }
  set selectedProfile(profile: any){
    this.profileBehaviour.next(profile);
  }
}
