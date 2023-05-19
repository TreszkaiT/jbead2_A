import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/models/language.service';

@Component({
  selector: 'app-language-new',
  templateUrl: './language-new.component.html',
  styleUrls: ['./language-new.component.css']
})
export class LanguageNewComponent implements OnInit {

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
  }

  onClickSubmit(form: any){    
    this.languageService.addLanguage(form.value)
      .then(
        (message) => { console.info(message) }
      )
      console.log(form.value)
  }

}
