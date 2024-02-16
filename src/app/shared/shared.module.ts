import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { SideMenuComponent } from './component/side-menu/side-menu.component';
import { GenderPipe } from './pipes/gender.pipe';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
    ],
    declarations: [
        HeaderComponent,
        SideMenuComponent,
        GenderPipe
    ],
    exports: [
        HeaderComponent,
        SideMenuComponent,
        GenderPipe,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
    ]
})
export class SharedModule { }