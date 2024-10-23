import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PrimengModule } from '../../../../core/prime/primeng.module';



@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent implements OnInit {
  
  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Update',
                icon: 'pi pi-refresh'
            },
            {
                label: 'Delete',
                icon: 'pi pi-times'
            }
        ];
    }
}
