import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   constructor(private translate: TranslateService) {
    // إعداد اللغات المتاحة
    this.translate.addLangs(['en', 'ar']);
    this.translate.setDefaultLang('ar');

    // استخدام اللغة المحفوظة أو الافتراضية
    const lang = localStorage.getItem('lang') || 'ar';
    this.translate.use(lang);
    this.updateDirection(lang);

    // ملاحظة أي تغيير في اللغة
    this.translate.onLangChange.subscribe((event) => {
      this.updateDirection(event.lang);
      localStorage.setItem('lang', event.lang);
    });
  }

  // 🔁 دالة لتحديث الاتجاه حسب اللغة
  updateDirection(lang: string) {
    const htmlTag = document.documentElement;
    if (lang === 'ar') {
      htmlTag.setAttribute('dir', 'rtl');
      htmlTag.setAttribute('lang', 'ar');
    } else {
      htmlTag.setAttribute('dir', 'ltr');
      htmlTag.setAttribute('lang', 'en');
    }
  }
  switchLang(lang: string) {
  this.translate.use(lang);
}
}
