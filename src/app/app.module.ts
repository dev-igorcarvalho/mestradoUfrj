// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { AppComponent } from './app.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { PrefacioComponent } from './prefacio/prefacio.component';
import { CapaComponent } from './capa/capa.component';
import { VideoFrameComponent } from './main-screen/video-frame/video-frame.component';
import { SideBarComponent } from './main-screen/side-bar/side-bar.component';
import { NavlinksComponent } from './main-screen/side-bar/navlinks/navlinks.component';
import { ParamTestComponent } from './main-screen/param-test/param-test.component';
import { QuizAreaComponent } from './main-screen/quiz-area/quiz-area.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { IndiceComponent } from './indice/indice.component';

const appRoutes: Routes = [
  {path: 'capa', component: CapaComponent },
  {path: 'prefacio', component: PrefacioComponent},
  {path: 'indice', component: IndiceComponent},
  // {path: 'aula', component: MainScreenComponent },
  // {path: 'principal/:paramTest', component: MainScreenComponent},
  {path: 'aula/:id', component: MainScreenComponent},
  {path: '', redirectTo: '/capa', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    PrefacioComponent,
    CapaComponent,
    VideoFrameComponent,
    SideBarComponent,
    NavlinksComponent,
    ParamTestComponent,
    QuizAreaComponent,
    PaginatorComponent,
    IndiceComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
