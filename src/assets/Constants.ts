import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})
export class AppConstants{

  static SHOW_JOBS_COMPONENT = 'show-jobs';
  static CREATE_JOBS_COMPONENT: 'create-jobs';
  static UPDATE_JOBS_COMPONENT: 'update-jobs';

}


