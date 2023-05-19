import { Component, OnInit } from '@angular/core';
import { PictureService } from 'src/app/services/models/picture.service';

@Component({
  selector: 'app-picture-new',
  templateUrl: './picture-new.component.html',
  styleUrls: ['./picture-new.component.css']
})
export class PictureNewComponent implements OnInit {

  constructor(private pictureService: PictureService) { }

  ngOnInit(): void {
  }

  onClickSubmit(form: any){    
    this.pictureService.addPicture(form.value)
      .then(
        (message) => { console.info(message) }
      )
      console.log(form.value)
  }

}
