import { environment } from 'src/environments/environment';

// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationDataModule } from './core/authentication/data/authentication-data.module';
import { AuthenticationStoreModule } from './core/authentication/store/authentication-store.module';
import { SharedModule } from './module/common';
import { ConfigModule } from './module/config/config.module';
import { AdminPageGuard } from './page/admin/guard';
import { ConfigService } from './api/services/config.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,                                                  // a html animációk működjenek a primeng component-eken
    // FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot(                                                        // NgRx: 1. Store és Effect elkészítése  és Config betöltése
      {},
      {
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        }
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    ConfigModule,
    AuthenticationStoreModule,                                              // e nélkül nem megy a login és registration html oldala
    AuthenticationDataModule                                                // u.a.
  ],
  providers: [ 
    AdminPageGuard,
    ConfigService,                                                          // az app konfigját tartalmazza: apiUrl, title, stb...
  ],                                            // e nélkül nem megy az admin html oldala
  bootstrap: [AppComponent]
})
export class AppModule { }
