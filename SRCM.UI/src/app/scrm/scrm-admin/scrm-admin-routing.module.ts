import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../../pages/miscellaneous/not-found/not-found.component';
import { ScrmAdminComponent } from './scrm-admin.component';
import { ProjectAdminDashboardComponent } from './project-admin-dashboard/project-admin-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SchoolListsComponent } from './School/school-lists/school-lists.component';

const routes: Routes = [{
  path: '',
  component: ScrmAdminComponent,
  children: [
    {
      path: 'dashboard',
      component: ProjectAdminDashboardComponent,
    },

    {
      path: 'profile',
      component: ProfileComponent,
    },


    // {
    //   path: 'iot-dashboard',
    //   component: DashboardComponent,
    // },
    // {
    //   path: 'layout',
    //   loadChildren: () => import('./layout/layout.module')
    //     .then(m => m.LayoutModule),
    // },
    // {
    //   path: 'forms',
    //   loadChildren: () => import('./forms/forms.module')
    //     .then(m => m.FormsModule),
    // },
    // {
    //   path: 'ui-features',
    //   loadChildren: () => import('./ui-features/ui-features.module')
    //     .then(m => m.UiFeaturesModule),
    // },
    // {
    //   path: 'modal-overlays',
    //   loadChildren: () => import('./modal-overlays/modal-overlays.module')
    //     .then(m => m.ModalOverlaysModule),
    // },
    // {
    //   path: 'extra-components',
    //   loadChildren: () => import('./extra-components/extra-components.module')
    //     .then(m => m.ExtraComponentsModule),
    // },
    // {
    //   path: 'maps',
    //   loadChildren: () => import('./maps/maps.module')
    //     .then(m => m.MapsModule),
    // },
    // {
    //   path: 'charts',
    //   loadChildren: () => import('./charts/charts.module')
    //     .then(m => m.ChartsModule),
    // },

    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrmAdminRoutingModule { }
