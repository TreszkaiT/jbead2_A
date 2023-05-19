import { Component, OnInit } from '@angular/core';
import { MessageAppService } from 'src/app/services/models/messageapp.service';

@Component({
  selector: 'app-messageApp-new',
  templateUrl: './messageApp-new.component.html',
  styleUrls: ['./messageApp-new.component.css']
})
export class MessageAppNewComponent implements OnInit {

  constructor(private messageAppService: MessageAppService) { }

  ngOnInit(): void {
  }

  onClickSubmit(form: any){    
    this.messageAppService.addMessageApp(form.value)
      .then(
        (message) => { console.info(message) }
      )
      console.log(form.value)
  }

}
