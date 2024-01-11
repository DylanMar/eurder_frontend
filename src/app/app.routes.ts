import { Routes } from '@angular/router';
import { ItemGalleryComponent } from './component/item-gallery/item-gallery.component';
import { AddItemFormComponent } from './component/add-item-form/add-item-form.component';

export const routes: Routes = [
    {path: '', component: ItemGalleryComponent},
    {path: 'add-item', component: AddItemFormComponent}
];
