import { Component, Input, OnInit } from '@angular/core';
import { Study } from 'src/app/model/study';
import { StudyService } from 'src/app/services/models/study.service';
import { UrlService } from 'src/app/services/url.service';


@Component({
  selector: 'app-study-edit',
  templateUrl: './study-edit.component.html',
  styleUrls: ['./study-edit.component.css']
})
export class StudyEditComponent implements OnInit {

  // @Input() study: Study

  lastEditedStudy = <Study>{}

  editedStudy = <Study>{}

  // currentLink: string = "/"

  constructor(private studyService: StudyService, private urlService: UrlService) { 
    this.lastEditedStudy = this.studyService.getLastEditedStudy()
    if(this.lastEditedStudy !== null || Object.keys(this.lastEditedStudy).length !== 0){
      this.studyService.lastEditedStudy = <Study>{}
    }
  }
  
  ngOnInit(): void {

    // this.urlService.urlChanged
    // .subscribe(
    //   (url) => {
    //     this.currentLink = url
    //   }
    // )
    
    if(this.lastEditedStudy !== null || Object.keys(this.lastEditedStudy).length !== 0){
      this.studyService.readStudyOne(true, ""+this.lastEditedStudy.id)
        .then(
          (studyResp) => {
            let study1: Study = new Study()
            study1.fromObject(studyResp)
            this.editedStudy = study1
          }
        )
    }
  }

  onClickSubmit(form: any){
    let study1: Study = new Study()
    study1.fromObject(form.value)
    this.editedStudy = study1
    this.studyService.updateStudy(this.editedStudy)
  }
}
