import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GiveJobsService } from 'src/app/givejobs/give-jobs.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  jobs = [];
  chosenJob:any;
  constructor(private _route:ActivatedRoute, _jobService:GiveJobsService){
    var jobName = _route.snapshot.params['name'];
    this.jobs = _jobService.getJobs();

     this.chosenJob = this.jobs.find((job:any) => {
      return job.company == jobName;
    })
    console.log(this.chosenJob);
    
  }
}
