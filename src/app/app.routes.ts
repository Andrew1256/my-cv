import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { AngularComponent } from './angular/angular.component';

export const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' }, // Редирект на головну сторінку
  { path: 'main', component: MainpageComponent }, // Головна сторінка
 { path: 'education', component: EducationComponent },
 {path: 'skills', component: SkillsComponent},
 {path: 'contact', component: ContactComponent},
 {path: 'angular', component: AngularComponent}
];
