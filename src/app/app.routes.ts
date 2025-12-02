import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Galery } from './pages/galery/galery';

export const routes: Routes = [
    {path: '', component:Home },
    {path: 'nosotros', component:About },
    {path: 'galeria', component:Galery},
    {path: '**', redirectTo: ''}
];

