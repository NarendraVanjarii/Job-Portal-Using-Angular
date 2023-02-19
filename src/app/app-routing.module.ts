import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateJobsComponent } from './create-jobs/create-jobs.component';
import { ShowJobsComponent } from './show-jobs/show-jobs.component';
import { UpdateJobsComponent } from './update-jobs/update-jobs.component';


const routes: Routes = [
  { path : 'show-jobs' , component : ShowJobsComponent },
  { path : 'create-jobs' , component : CreateJobsComponent },
  { path : 'update-jobs' , component : UpdateJobsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
