import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatTabsModule} from '@angular/material/tabs';
import { MatSortModule } from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatCardModule} from '@angular/material/card'; 
@NgModule({
    declarations: [],
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatTabsModule,
        MatCardModule,
        MatSortModule,
        MatProgressSpinnerModule

    ],
    exports:[
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule,
        MatTableModule,
        MatPaginatorModule,
        MatTabsModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatCardModule
    ]
})
export class MaterialModule { }
