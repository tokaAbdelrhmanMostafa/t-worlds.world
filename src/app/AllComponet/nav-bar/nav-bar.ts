import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  imports: [NgbCollapseModule ],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
  constructor(private router: Router , private translate: TranslateService) {
    this.translate.addLangs(['ar', 'en']);
  this.translate.setDefaultLang('ar');
  }
  isCollapsed = true;
 scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}


switchLanguage(lang: string) {
  this.translate.use(lang);
}
}
