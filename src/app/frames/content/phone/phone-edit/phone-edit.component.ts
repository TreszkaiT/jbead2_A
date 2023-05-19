import { Component, Input, OnInit } from '@angular/core';
import { Phone } from 'src/app/model/phone';
import { PhoneService } from 'src/app/services/models/phone.service';
import { UrlService } from 'src/app/services/url.service';


@Component({
  selector: 'app-phone-edit',
  templateUrl: './phone-edit.component.html',
  styleUrls: ['./phone-edit.component.css']
})
export class PhoneEditComponent implements OnInit {

  // @Input() phone: Phone

  lastEditedPhone = <Phone>{}

  editedPhone = <Phone>{}

  // currentLink: string = "/"

  constructor(private phoneService: PhoneService, private urlService: UrlService) { 
    this.lastEditedPhone = this.phoneService.getLastEditedPhone()
    if(this.lastEditedPhone !== null || Object.keys(this.lastEditedPhone).length !== 0){
      this.phoneService.lastEditedPhone = <Phone>{}
    }
  }
  
  ngOnInit(): void {

    // this.urlService.urlChanged
    // .subscribe(
    //   (url) => {
    //     this.currentLink = url
    //   }
    // )
    
    if(this.lastEditedPhone !== null || Object.keys(this.lastEditedPhone).length !== 0){
      this.phoneService.readPhoneOne(true, ""+this.lastEditedPhone.id)
        .then(
          (phoneResp) => {
            let phone1: Phone = new Phone()
            phone1.fromObject(phoneResp)
            this.editedPhone = phone1
          }
        )
    }
  }

  onClickSubmit(form: any){
    let phone1: Phone = new Phone()
    phone1.fromObject(form.value)
    this.editedPhone = phone1
    this.phoneService.updatePhone(this.editedPhone)
  }
}
