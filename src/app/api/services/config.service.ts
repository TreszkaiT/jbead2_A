import { Injectable } from '@angular/core';

interface Data {
  [key: string]: string | number | boolean
  appTitle: string
  api: string
  apiUrl: string
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  data: Data = {
    appTitle: 'Számlázó program',
    api: 'api',
    apiUrl: 'http://localhost:8080'
    // apiUrl: 'http://localhost:3333'
  }

  constructor() { }

  get(key: keyof Data){
    return this.data[key] || null
  }

  set(key: keyof Data, value: string | number | boolean){
    this.data[key] = value
  }
}
