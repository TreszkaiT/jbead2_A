import { Component, Input, OnInit } from '@angular/core';
import { MessageApp } from 'src/app/model/messageapp';
import { MessageAppService } from 'src/app/services/models/messageapp.service';
import { UrlService } from 'src/app/services/url.service';


@Component({
  selector: 'app-messageApp-edit',
  templateUrl: './messageApp-edit.component.html',
  styleUrls: ['./messageApp-edit.component.css']
})
export class MessageAppEditComponent implements OnInit {

  // @Input() messageApp: MessageApp

  lastEditedMessageApp = <MessageApp>{}

  editedMessageApp = <MessageApp>{}

  // currentLink: string = "/"

  constructor(private messageAppService: MessageAppService, private urlService: UrlService) { 
    this.lastEditedMessageApp = this.messageAppService.getLastEditedMessageApp()
    if(this.lastEditedMessageApp !== null || Object.keys(this.lastEditedMessageApp).length !== 0){
      this.messageAppService.lastEditedMessageApp = <MessageApp>{}
    }
  }
  
  ngOnInit(): void {

    // this.urlService.urlChanged
    // .subscribe(
    //   (url) => {
    //     this.currentLink = url
    //   }
    // )
    
    if(this.lastEditedMessageApp !== null || Object.keys(this.lastEditedMessageApp).length !== 0){
      this.messageAppService.readMessageAppOne(true, ""+this.lastEditedMessageApp.id)
        .then(
          (messageAppResp) => {
            let messageApp1: MessageApp = new MessageApp()
            messageApp1.fromObject(messageAppResp)
            this.editedMessageApp = messageApp1
          }
        )
    }
  }

  onClickSubmit(form: any){
    let messageApp1: MessageApp = new MessageApp()
    messageApp1.fromObject(form.value)
    this.editedMessageApp = messageApp1
    this.messageAppService.updateMessageApp(this.editedMessageApp)
  }
}
