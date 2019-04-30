import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./app/home/home.component";
import {SearchComponent} from "./app/search/search.component";
import {ViewComponent} from "./app/view/view.component";
import {BookComponent} from "./app/book/book.component";
import {ResultComponent} from "./app/result/result.component";
const APP_ROUTES : Routes = [
  {path:'',component:HomeComponent},
  {path:'search',component:SearchComponent},
  {path:'view/id/:id',component:ViewComponent},
  {path:'book/id/:id',component:BookComponent},
  {path:'result/:search/:limit',component:ResultComponent}
];
export const routingModule = RouterModule.forRoot(APP_ROUTES);
