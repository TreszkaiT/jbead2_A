import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigStoreService } from 'src/app/api/config';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-config-page',
  templateUrl: './config-page.component.html',
  styleUrls: ['./config-page.component.scss']
})
export class ConfigPageComponent {

  public constructor(private configStoreService: ConfigStoreService) {}

  public btn1Handler() {                                                      // ha a HTML-ben a btn1-re kattintanak, akkor Effects-et, Service-t és DB-t is használunk
      this.configStoreService.dispatchGetEntityAction('1');                // akkor a configStoreService lefut, és el-dispatchel egy GetEntityAction-t. GetEntityAction feladata: a hozzá társított Effect-ben kimegyünk, és a DataService által lekérünk egy Action-t 
  }

  public btn2Handler() {
      this.configStoreService.dispatchUpdateEntityAction({                    // itt eldobunk egy Action-t egy paraméterrel, de nincs Effect, Service, DB, csak direktbe bemódosítjuk a Storet
          id: '1',                                                         // hogy a Store-ban közvetlen ezt a konfigot állítsuk be
          theme: 'kb-light-theme',
      })
  }

  public btn3Handler() {
      this.configStoreService.dispatchUpdateEntityAction({
          id: '1',
          theme: 'kb-dark-theme',
      })
  }

}
