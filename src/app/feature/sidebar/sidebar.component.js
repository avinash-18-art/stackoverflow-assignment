import {Component, OnInit} from '@angular/core'
import {Routes} from 'src/app/enums/routes.enum'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor() {}
  get Routes() {
    return Routes
  }
  ngOnInit(): void {}
}
