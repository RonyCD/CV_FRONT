import { Component, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';
import { PrimengModule } from '../../../../core/prime/primeng.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

    @ViewChild('sidebarRef') sidebarRef!: Sidebar;

    closeCallback(e: Event): void {
        this.sidebarRef.close(e);
    }

    sidebarVisible: boolean = false;

}
