import { Component, OnDestroy, OnInit } from '@angular/core';
import { SocialMedia } from '../../../model/socialmedia';
// import { SocialMediaService } from '../../../../service/socialMedia.service';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { SocialMediaService } from 'src/app/services/models/socialmedia.service';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-socialMedia',
  templateUrl: './socialMedia.component.html',
  styleUrls: ['./socialMedia.component.css']
})
export class SocialMediaComponent implements OnInit, OnDestroy {

  currencies: Array<SocialMedia> = []

  socialMediaSubscribe: any

  faEdit = faEdit
  faTimes = faTimes

  constructor(private socialMediaService: SocialMediaService, private urlService: UrlService) { 

  }

  ngOnInit(): void {

    this.currencies = this.socialMediaService.currencies

    this.socialMediaSubscribe = this.socialMediaService.socialMediaObserve
      .subscribe(
        (currencies) => { this.currencies = currencies},
        (error) => { this.currencies = [] }
      )
  }

  ngOnDestroy(): void {
    this.socialMediaSubscribe.unsubscribe()
  }

  onEditSocialMedia(socialMedia: SocialMedia){
    this.socialMediaService.lastEditedSocialMedia = socialMedia
    this.urlService.jumpTo('/socialMedia-edit')
  }

  onDeleteSocialMedia(socialMedia: SocialMedia){
    this.socialMediaService.deleteSocialMedia(socialMedia)
  }

}
