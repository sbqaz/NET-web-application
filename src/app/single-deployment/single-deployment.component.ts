import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { GenericList } from '../generic-list';
import { TestEnvironment } from '../testEnvironment';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { FormGroup } from '@angular/forms/src/model';

@Component({
  selector: 'app-single-deployment',
  templateUrl: './single-deployment.component.html',
  styleUrls: ['./single-deployment.component.css']
})
export class SingleDeploymentComponent implements OnInit {
  hqBuilds = [];
  flBuilds = [];
  list = new GenericList();
  submitted = false;
  env = new TestEnvironment(
    'default env',
    'build x',
    'default installation',
    'build y'
  );

  constructor(private appService: AppService) { }

  get showTestBuild() { return JSON.stringify(this.env); }

  ngOnInit(): void {
    this.appService.listHQBuildsAsObservable().subscribe(result => {
      this.hqBuilds = result;
    });

    this.appService.listFLBuildsAsObservable().subscribe(result => {
      this.flBuilds = result;
    });
  }

  onSubmit() { this.submitted = true; }

  confirm(): void {
    this.appService.submitDeploymentForm(this.env).subscribe(result => {
      console.log('Service called with deployment form was made');
    });
  }
}
