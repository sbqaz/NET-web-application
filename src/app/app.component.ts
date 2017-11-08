import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

import { HQBuild } from './hqBuild';
import { FLBuild } from './flBuild';
import { GenericList } from './generic-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  hqBuilds: HQBuild[];
  flBuilds: FLBuild[];
  list = new GenericList();

  constructor(private _appService: AppService) {}

  ngOnInit(): void {
    // *** Somehow generates an error, keeps calling /api/ for some reason ***
    // this._appService.sayHello().subscribe(result => {
    //   this.greetings = result;
    // });

    this._appService.listHQBuildsAsObservable().subscribe(result => {
      this.hqBuilds = result;
    });

    this._appService.listFLBuildsAsObservable().subscribe(result => {
      this.flBuilds = result;
    });
  }

submitDeploymentForm() {
  
}

}
