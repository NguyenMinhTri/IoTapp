import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TempHumiComponent} from './tempHumi/tempHumi.component';
import {PlotComponent} from './plot/plot.component';
import {HumidityComponent} from './humidity/humidity.component';
import {TemperatureComponent} from './temperature/temperature.component';
import {LightComponent} from './light/light.component'


const routes: Routes = [
  {path: 'tempHumi', component: TempHumiComponent},
  {path: 'plot', component: PlotComponent},
  {path: 'humidity', component: HumidityComponent },
  {path: 'temperature', component: TemperatureComponent },
  {path: 'light', component: LightComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
