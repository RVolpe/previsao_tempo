import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';

import { ComponentsModule } from 'src/app/shared/components/components.module';
import { bookmarkReducer } from './state/bookmarks.reducer';
import { BookmarksPage } from './containers/bookmarks/bookmarks.page';
import { BookmarksEffects } from './state/bookmarks.effects';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    StoreModule.forFeature('bookmarks', bookmarkReducer),
    EffectsModule.forFeature([BookmarksEffects]),
    ComponentsModule,
  ],
  declarations: [
    BookmarksPage
  ],
})
export class BookmarksModule {
}
