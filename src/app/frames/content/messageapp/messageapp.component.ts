import { Component, OnDestroy, OnInit } from '@angular/core';

// import { MessageAppService } from '../../../../service/messageApp.service';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { MessageApp } from 'src/app/model/messageapp';
import { MessageAppService } from 'src/app/services/models/messageapp.service';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-messageApp',
  templateUrl: './messageApp.component.html',
  styleUrls: ['./messageApp.component.css']
})
export class MessageAppComponent implements OnInit, OnDestroy {

  currencies: Array<MessageApp> = []

  messageAppSubscribe: any

  faEdit = faEdit
  faTimes = faTimes

  constructor(private messageAppService: MessageAppService, private urlService: UrlService) { 

  }

  ngOnInit(): void {

    this.currencies = this.messageAppService.currencies

    this.messageAppSubscribe = this.messageAppService.messageAppObserve
      .subscribe(
        (currencies) => { this.currencies = currencies},
        (error) => { this.currencies = [] }
      )
  }

  ngOnDestroy(): void {
    this.messageAppSubscribe.unsubscribe()
  }

  onEditMessageApp(messageApp: MessageApp){
    this.messageAppService.lastEditedMessageApp = messageApp
    this.urlService.jumpTo('/messageApp-edit')
  }

  onDeleteMessageApp(messageApp: MessageApp){
    this.messageAppService.deleteMessageApp(messageApp)
  }

}
