import { Component, inject } from '@angular/core';
import { Item } from '../../model/item';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { ItemService } from '../../service/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
  templateUrl: './add-item-form.component.html',
  styleUrl: './add-item-form.component.css'
})
export class AddItemFormComponent {
  itemService: ItemService = inject(ItemService);
  router: Router = inject(Router);
  itemForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(0)]],
    amountInStock: [0, [Validators.required, Validators.min(0)]]
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.itemForm.valid) {
      const item = this.itemForm.value as Item;
      this.itemService.addItem(item).subscribe(
        {
          next: () => this.router.navigate([''])
        }
      );
    }
  }
}
