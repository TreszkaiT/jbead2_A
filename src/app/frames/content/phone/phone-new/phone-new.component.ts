import { Component, OnInit } from '@angular/core';
import { PhoneService } from 'src/app/services/models/phone.service';

@Component({
  selector: 'app-phone-new',
  templateUrl: './phone-new.component.html',
  styleUrls: ['./phone-new.component.css']
})
export class PhoneNewComponent implements OnInit {

  constructor(private phoneService: PhoneService) { }

  ngOnInit(): void {
  }

  onClickSubmit(form: any){    
    this.phoneService.addPhone(form.value)
      .then(
        (message) => { console.info(message) }
      )
      console.log(form.value)
  }

}
