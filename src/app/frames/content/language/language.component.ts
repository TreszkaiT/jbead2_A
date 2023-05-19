import { Component, OnDestroy, OnInit } from '@angular/core';
import { Language } from '../../../model/language';
// import { LanguageService } from '../../../../service/language.service';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { LanguageService } from 'src/app/services/models/language.service';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit, OnDestroy {

  currencies: Array<Language> = []

  languageSubscribe: any

  faEdit = faEdit
  faTimes = faTimes

  constructor(private languageService: LanguageService, private urlService: UrlService) { 

  }

  ngOnInit(): void {

    this.currencies = this.languageService.currencies

    this.languageSubscribe = this.languageService.languageObserve
      .subscribe(
        (currencies) => { this.currencies = currencies},
        (error) => { this.currencies = [] }
      )
  }

  ngOnDestroy(): void {
    this.languageSubscribe.unsubscribe()
  }

  onEditLanguage(language: Language){
    this.languageService.lastEditedLanguage = language
    this.urlService.jumpTo('/language-edit')
  }

  onDeleteLanguage(language: Language){
    this.languageService.deleteLanguage(language)
  }

}
