import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})

export class SettingComponent {

  constructor(public theme:ThemeService){

  }
}
