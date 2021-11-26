import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DetailsPage } from './containers/details/details.page';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { DetailsGuard } from './services/details.guard';
import { DailyWeatherComponent } from './components/daily-weather/daily-weather.component';
import { DetailsEffects } from './state/details.effects';
import { detailsReducer } from './state/details.reducer';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DetailsPage, canActivate: [DetailsGuard] },
    ]),
    StoreModule.forFeature('details', detailsReducer),
    EffectsModule.forFeature([DetailsEffects]),
    ComponentsModule,
  ],
  declarations: [
    DetailsPage,
    DailyWeatherComponent,
  ],
  providers: [
    DetailsGuard,
  ],
})
export class DetailsModule { }
