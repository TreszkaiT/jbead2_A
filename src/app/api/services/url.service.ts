import { Injectable, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  // @Output() urlChanged: EventEmitter<string> = new EventEmitter()

  currentLink: string = "/"

  constructor(private location: Location, private router: Router) { }

  jumpTo(url: string){
    this.currentLink = url
    // this.urlChanged.emit(this.currentLink)
    this.router.navigate([this.currentLink]); 
  }

  jumpToChangeUrlOnly(url: string){                         //  ez csak a böngészőben változtatja meg az URL címet, de nem ugrik át rá
    this.currentLink = url
    // this.urlChanged.emit(this.currentLink)
    this.location.replaceState('/currency-edit')
  }
}
