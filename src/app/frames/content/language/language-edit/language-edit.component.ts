import { Component, Input, OnInit } from '@angular/core';
import { Language } from 'src/app/model/language';
import { LanguageService } from 'src/app/services/models/language.service';
import { UrlService } from 'src/app/services/url.service';


@Component({
  selector: 'app-language-edit',
  templateUrl: './language-edit.component.html',
  styleUrls: ['./language-edit.component.css']
})
export class LanguageEditComponent implements OnInit {

  // @Input() language: Language

  lastEditedLanguage = <Language>{}

  editedLanguage = <Language>{}

  // currentLink: string = "/"

  constructor(private languageService: LanguageService, private urlService: UrlService) { 
    this.lastEditedLanguage = this.languageService.getLastEditedLanguage()
    if(this.lastEditedLanguage !== null || Object.keys(this.lastEditedLanguage).length !== 0){
      this.languageService.lastEditedLanguage = <Language>{}
    }
  }
  
  ngOnInit(): void {

    // this.urlService.urlChanged
    // .subscribe(
    //   (url) => {
    //     this.currentLink = url
    //   }
    // )
    
    if(this.lastEditedLanguage !== null || Object.keys(this.lastEditedLanguage).length !== 0){
      this.languageService.readLanguageOne(true, ""+this.lastEditedLanguage.id)
        .then(
          (languageResp) => {
            let language1: Language = new Language()
            language1.fromObject(languageResp)
            this.editedLanguage = language1
          }
        )
    }
  }

  onClickSubmit(form: any){
    let language1: Language = new Language()
    language1.fromObject(form.value)
    this.editedLanguage = language1
    this.languageService.updateLanguage(this.editedLanguage)
  }
}
