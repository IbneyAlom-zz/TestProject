import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CropCommoditiesComponent } from './crop-commodities/crop-commodities.component';
import { BTComponent } from './crop-commodities/bt/bt.component';
import { NTComponent } from './crop-commodities/nt/nt.component';
import { UFComponent } from './crop-commodities/uf/uf.component';
import { USEComponent } from './crop-commodities/use/use.component';
import { FruitComponent } from './crop-commodities/nt/fruit/fruit.component';
import { HerbsComponent } from './crop-commodities/nt/herbs/herbs.component';
import { GrassesComponent } from './crop-commodities/nt/grasses/grasses.component';
import { NutsAndSeedsComponent } from './crop-commodities/nt/nuts-and-seeds/nuts-and-seeds.component';
import { VegetablesComponent } from './crop-commodities/nt/vegetables/vegetables.component';
import { ProcessingCropComponent } from './crop-commodities/nt/processing-crop/processing-crop.component';
import { FoodCropComponent } from './crop-commodities/nt/food-crop/food-crop.component';
import { StalkAndStemCropsComponent } from './crop-commodities/nt/stalk-and-stem-crops/stalk-and-stem-crops.component';
import { VBtComponent } from './crop-commodities/nt/vegetables/v-bt/v-bt.component';
import { VRtComponent } from './crop-commodities/nt/vegetables/v-rt/v-rt.component';
import { VNtComponent } from './crop-commodities/nt/vegetables/v-nt/v-nt.component';
import { VUfComponent } from './crop-commodities/nt/vegetables/v-uf/v-uf.component';

@NgModule({
  declarations: [
    AppComponent,
    CropCommoditiesComponent,
    BTComponent,
    NTComponent,
    UFComponent,
    USEComponent,
    FruitComponent,
    HerbsComponent,
    GrassesComponent,
    NutsAndSeedsComponent,
    VegetablesComponent,
    ProcessingCropComponent,
    FoodCropComponent,
    StalkAndStemCropsComponent,
    VBtComponent,
    VRtComponent,
    VNtComponent,
    VUfComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
