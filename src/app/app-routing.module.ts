import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from "./modules/login/login.component";
import { HomeComponent } from "./modules/home/home.component";
import { PostsComponent } from "./modules/posts/posts.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
