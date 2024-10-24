import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { ProgressBarModule } from 'primeng/progressbar';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { SidebarModule } from 'primeng/sidebar';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListboxModule } from 'primeng/listbox';
import { OrderListModule } from 'primeng/orderlist';



@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    PasswordModule,
    CardModule,
    TableModule,
    DropdownModule,
    CalendarModule,
    DialogModule,
    TooltipModule,
    ProgressBarModule,
    CheckboxModule,
    FormsModule,
    ToolbarModule,
    AvatarModule,
    SidebarModule,
    BreadcrumbModule,
    BrowserAnimationsModule,
    ListboxModule,
    OrderListModule
    
  ]
})
export class PrimengModule { }
