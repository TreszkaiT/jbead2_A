import { Component, OnInit } from '@angular/core';
import { StudyService } from 'src/app/services/models/study.service';

@Component({
  selector: 'app-study-new',
  templateUrl: './study-new.component.html',
  styleUrls: ['./study-new.component.css']
})
export class StudyNewComponent implements OnInit {

  constructor(private studyService: StudyService) { }

  ngOnInit(): void {
  }

  onClickSubmit(form: any){    
    this.studyService.addStudy(form.value)
      .then(
        (message) => { console.info(message) }
      )
      console.log(form.value)
  }

}
