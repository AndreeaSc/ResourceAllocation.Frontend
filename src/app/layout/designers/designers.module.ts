import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DesignersListComponent } from './designers-list.component';
import { DesignersRoutingModule } from './designers-routing.module';
import { ServicesModule } from 'src/app/shared/services/services.module';
import { FormsModule } from '@angular/forms';
import { DesignersAddComponent } from './designers-add.component';
import { DesignersEditComponent } from './designers-edit.component';
import { DesignersDeleteComponent } from './designers-delete.component';
import { DesignersSelectModelsComponent } from './designers-select-models.component';
import { SortablejsModule } from 'angular-sortablejs';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        DesignersRoutingModule,
        ServicesModule,
        FormsModule,
        SortablejsModule
    ],
    declarations: [
        DesignersListComponent,
        DesignersAddComponent,
        DesignersEditComponent,
        DesignersDeleteComponent,
        DesignersSelectModelsComponent
    ],
    exports: [
        DesignersListComponent,
        DesignersAddComponent,
        DesignersEditComponent,
        DesignersDeleteComponent,
        DesignersSelectModelsComponent
    ]
})
export class DesignersModule {}
