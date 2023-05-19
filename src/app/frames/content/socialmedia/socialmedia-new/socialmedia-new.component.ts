import { Component, OnInit } from '@angular/core';
import { SocialMediaService } from 'src/app/services/models/socialmedia.service';

@Component({
  selector: 'app-socialMedia-new',
  templateUrl: './socialMedia-new.component.html',
  styleUrls: ['./socialMedia-new.component.css']
})
export class SocialMediaNewComponent implements OnInit {

  constructor(private socialMediaService: SocialMediaService) { }

  ngOnInit(): void {
  }

  onClickSubmit(form: any){    
    this.socialMediaService.addSocialMedia(form.value)
      .then(
        (message) => { console.info(message) }
      )
      console.log(form.value)
  }

}
