import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from "@angular/router";
import { AppComponent }   from './app.component';
import { CarService } from './carservice';
import { AppRoutingModule } from './app-routing.module';
import { LivechatWidgetModule } from '@livechat/angular-widget';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { C1Component } from './c1.component';
import { C2Component } from './c2.component';
import { ModalComponent } from './modal.component';
import { CarDetailsComponent } from './car-details.component';
import { MarketplaceComponent } from './marketplace.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    LivechatWidgetModule
  ],
  declarations: [ AppComponent, C1Component, C2Component, ModalComponent, CarDetailsComponent, MarketplaceComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CarService]
})

export class AppModule { }
