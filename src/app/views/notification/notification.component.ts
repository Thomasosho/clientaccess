import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  notifications = [];
  loading = false;
  page = 1;

  constructor(
    private crud: CrudService,
    private util: UtilService,
  ) {}

  ngOnInit() {
   this.getNotification();
  }

  getNotification() {
    this.loading = true;
    this.util.getNotification().subscribe(res => {
      console.log(res);
      this.notifications = res as any;
      this.loading = false;
      this.notifications.forEach(notification => {
       if (!notification.read) {
          this.markAsRead(notification.id);
        }
      });
    }, err => {
      console.log(err);
      this.loading = false;
    });
  }

  markAsRead(id) {
    const token = this.util.getToken();
    this.crud.getRequestImAuth(`notification/markAsRead/${id}`, token).subscribe((res) => {
      console.log(res);
    }, err => console.log(err));
  }
}
