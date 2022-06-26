import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');
  }
  title = 'alnimer-app';


  // leave it for later
  // Software Engineer -> مهندس برمجيات
  // the order of the words differ... needs to be fixed somehow
  switchLanguage(lang: string) {
    this.translate.use(lang)
  }
}



