import { Component, Input, OnInit } from '@angular/core';
import { Picture } from 'src/app/model/picture';
import { PictureService } from 'src/app/services/models/picture.service';
import { UrlService } from 'src/app/services/url.service';


@Component({
  selector: 'app-picture-edit',
  templateUrl: './picture-edit.component.html',
  styleUrls: ['./picture-edit.component.css']
})
export class PictureEditComponent implements OnInit {

  // @Input() picture: Picture

  lastEditedPicture = <Picture>{}

  editedPicture = <Picture>{}

  // currentLink: string = "/"

  constructor(private pictureService: PictureService, private urlService: UrlService) { 
    this.lastEditedPicture = this.pictureService.getLastEditedPicture()
    if(this.lastEditedPicture !== null || Object.keys(this.lastEditedPicture).length !== 0){
      this.pictureService.lastEditedPicture = <Picture>{}
    }
  }
  
  ngOnInit(): void {

    // this.urlService.urlChanged
    // .subscribe(
    //   (url) => {
    //     this.currentLink = url
    //   }
    // )
    
    if(this.lastEditedPicture !== null || Object.keys(this.lastEditedPicture).length !== 0){
      this.pictureService.readPictureOne(true, ""+this.lastEditedPicture.id)
        .then(
          (pictureResp) => {
            let picture1: Picture = new Picture()
            picture1.fromObject(pictureResp)
            this.editedPicture = picture1
          }
        )
    }
  }

  onClickSubmit(form: any){
    let picture1: Picture = new Picture()
    picture1.fromObject(form.value)
    this.editedPicture = picture1
    this.pictureService.updatePicture(this.editedPicture)
  }
}
