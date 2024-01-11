import { Component, OnInit, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

import { Observable } from 'rxjs';
import { Item } from '../../model/item';
import { ItemService } from '../../service/item.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-item-gallery',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatGridListModule, MatIconModule],
  templateUrl: './item-gallery.component.html',
  styleUrl: './item-gallery.component.css'
})
export class ItemGalleryComponent implements OnInit {

  private itemService: ItemService = inject(ItemService);

  items: Item[] = [];

  ngOnInit(): void {
    this.getItems();;
  }

  getItems(): void {
    this.itemService.getItems().subscribe(
      {
        next: (items: Item[]) => {
          this.items = items;
        }
      }
    );
    
  }

  getColor(itemResuplyUrgency: string) {
    if (itemResuplyUrgency === 'STOCK_LOW') {
      return 'red';

      return '$custom-color-stock-low';
    } else if (itemResuplyUrgency === 'STOCK_MEDIUM') {
      return 'orange';

      return '$custom-color-stock-medium';
    } else {
      return 'green';

      return '$custom-color-stock-high';
    }
  }

}
