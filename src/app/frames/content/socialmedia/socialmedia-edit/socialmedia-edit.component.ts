import { Component, Input, OnInit } from '@angular/core';
import { SocialMedia } from 'src/app/model/socialmedia';
import { SocialMediaService } from 'src/app/services/models/socialmedia.service';
import { UrlService } from 'src/app/services/url.service';


@Component({
  selector: 'app-socialMedia-edit',
  templateUrl: './socialMedia-edit.component.html',
  styleUrls: ['./socialMedia-edit.component.css']
})
export class SocialMediaEditComponent implements OnInit {

  // @Input() socialMedia: SocialMedia

  lastEditedSocialMedia = <SocialMedia>{}

  editedSocialMedia = <SocialMedia>{}

  // currentLink: string = "/"

  constructor(private socialMediaService: SocialMediaService, private urlService: UrlService) { 
    this.lastEditedSocialMedia = this.socialMediaService.getLastEditedSocialMedia()
    if(this.lastEditedSocialMedia !== null || Object.keys(this.lastEditedSocialMedia).length !== 0){
      this.socialMediaService.lastEditedSocialMedia = <SocialMedia>{}
    }
  }
  
  ngOnInit(): void {

    // this.urlService.urlChanged
    // .subscribe(
    //   (url) => {
    //     this.currentLink = url
    //   }
    // )
    
    if(this.lastEditedSocialMedia !== null || Object.keys(this.lastEditedSocialMedia).length !== 0){
      this.socialMediaService.readSocialMediaOne(true, ""+this.lastEditedSocialMedia.id)
        .then(
          (socialMediaResp) => {
            let socialMedia1: SocialMedia = new SocialMedia()
            socialMedia1.fromObject(socialMediaResp)
            this.editedSocialMedia = socialMedia1
          }
        )
    }
  }

  onClickSubmit(form: any){
    let socialMedia1: SocialMedia = new SocialMedia()
    socialMedia1.fromObject(form.value)
    this.editedSocialMedia = socialMedia1
    this.socialMediaService.updateSocialMedia(this.editedSocialMedia)
  }
}
