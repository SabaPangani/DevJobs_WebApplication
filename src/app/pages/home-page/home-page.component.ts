import { Component,OnInit } from '@angular/core';
import { GiveJobsService } from 'src/app/givejobs/give-jobs.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  jobsArr:any = [];
  filteredJobs:any = [];
  constructor (private _getJob:GiveJobsService){
    this.jobsArr = _getJob.getJobs();
    this.filteredJobs = [...this.jobsArr];
    console.log(this.jobsArr);
  }
  
   locations = "Filter By Location,Germany,Japan,New Zealand,Russia,Singapore,United Kingdom,United States";
   locationsArr = this.locations.split(',');

  //  filterByRegion(location:any){
  //   console.log(this.locationsArr);
  //   console.log(location.value);
    
  //   this.filteredJobs = this.jobsArr.filter((job:any) =>{
  //     return location.value === job.location;
  //   })
  //   if (location.value === "Filter By Location"){
  //     return this.filteredJobs = this._getJob.getJobs();
  //   }
  //  }

  // Search(value:any){
  //   const str2 = value.charAt(0).toUpperCase() + value.slice(1);
  //   console.log(str2);
  //   console.log(value);

  //   this.filteredJobs = this.jobsArr.filter((job:any) =>{
  //     return str2 === job.company;
  //   })

  // }

  // checkSearch(input:any){
  //   if(input.length <= 0){
  //     return this.filteredJobs = this._getJob.getJobs();
  //   }
  // }
  // checkContract(){
  //   const checkBoxBtn = document.querySelector(".checkBtn") as HTMLInputElement;
  //   const tag = document.querySelector(".tag") as HTMLSpanElement;

  //   tag.classList.toggle("active");
  //   if (checkBoxBtn.checked == true){
  //     this.filteredJobs = this.jobsArr.filter((job:any) =>{
  //       return "Full Time" === job.contract;
  //     })
  //   }else{
  //     return this.filteredJobs = this._getJob.getJobs();
  //   }
  // }

  // ngOnInit(){
  //   const main = document.querySelector("main");
  // }
   main = document.querySelector("main") as HTMLElement;

   filterJobs(){
    this.filteredJobs = [...this.jobsArr];

    const searchInput = document.querySelector(".search") as HTMLInputElement;
    const locationInput = document.querySelectorAll(".locInput") as any;
    const checkBox = document.querySelector(".checkBtn") as HTMLInputElement;

    if (searchInput.value != ''){
      this.filteredJobs = this.filteredJobs.filter((job:any) =>{
        return job.company.toLowerCase() === searchInput.value.toLowerCase();
      })
    }
   
   if (checkBox.checked){
    this.filteredJobs = this.filteredJobs.filter((job:any) =>{
      return "Full Time" === job.contract;
    })
    console.log(this.filteredJobs);
   }
   for (const loc of locationInput) {
    if (loc.value != ''){
      this.filteredJobs = this.filteredJobs.filter((job:any) =>{
        return job.location.toLowerCase() === loc.value.toLowerCase();
      })
    }
  }
   }
   showMark(){
    const tags = document.querySelectorAll(".tag") as any;
    for (const tag of tags) {
      tag.classList.toggle("active")
    }
   }

   toggleMenuFilter(){
    const popUp = document.querySelector(".filter-popUp") as HTMLElement;
    const overlay = document.querySelector(".overlay") as HTMLElement;

    popUp.classList.toggle("active");
    overlay.classList.toggle("active");
   }
   closeMenuFilter(){
    const popUp = document.querySelector(".filter-popUp") as HTMLElement;
    const overlay = document.querySelector(".overlay") as HTMLElement;

      popUp.classList.remove("active");
      overlay.classList.remove("active");
   }
}


