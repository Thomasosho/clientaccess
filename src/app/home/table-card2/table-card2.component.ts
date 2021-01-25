import { Component, OnInit, Input } from '@angular/core';
import { EngagementService } from 'src/app/Services/engagement.service';
import { userType } from '../landing/landing.component';

@Component({
  selector: 'app-table-card2',
  templateUrl: './table-card2.component.html',
  styleUrls: ['./table-card2.component.scss']
})
export class TableCard2Component implements OnInit {
  @Input() user: any;
  @Input() type: userType;
  userType = userType;

  constructor(
    private engagementService: EngagementService
  ) { }

  ngOnInit(): void {}

  profileHandler(profile: any) {
    this.engagementService.selectedProfile = profile;
  }

}
