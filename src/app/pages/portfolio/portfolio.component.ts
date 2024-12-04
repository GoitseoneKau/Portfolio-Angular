import { DatePipe, NgIf } from '@angular/common';
import { GitReposService, Repo } from './../../services/git-repos.service';
import { afterNextRender, Component, ElementRef, EventEmitter, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [DatePipe,NgIf],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  //JS for sliding images
  @ViewChild('slide', { static: true })
  slide!: ElementRef;
  renderer!: Renderer2;

  repos:Repo[] = []
  images:string[]=[
    "assets/images/projects/DailyTodo responsive design.gif",
    "assets/images/projects/MemoryGame responsive design.gif",
    "assets/images/projects/Portfolio Angular responsive design.gif",
    "assets/images/projects/Store Admin Management System Responsive Design.gif",
    "assets/images/projects/Sunny Side Marketing Responsive Design.gif",
    "assets/images/projects/TSExpressRestAPI.gif"
  ]

  descriptions=
    [
      {"Store Admin Management System":
        "A project that required administrative privileges and give admin ability to add, update and delete a product. Have a login page to aauthenticate user"},
      {"DailyTodo":
        "A project to have login and signup page to add a user. The user is able to create, update and delete a todo. The todos have filter based on priority and search capability adn they are ordered in ascending order of the date"},
      {"MemoryGame":
        "A side project that generates random colours to pick from. Has difficulty levels"},
      {"Portfolio Angular":
        "This project is a portfolio to showcase  my past projects and let interested clients to be able to contact me"},
      {"Sunny Side Marketing":
        "A showcase project of a marketing landing page. To show UI/UX skills  "},
      {"TSExpressRestAPI":
        "An API that has CRUD(Create,Update,Delete) capabilities, with dummy users and todos "}
    ]


  constructor(private repoService:GitReposService){
    afterNextRender(()=> window.scrollTo({ top: 0, behavior: 'smooth' }))
  }

  ngOnInit():void{
    this.repoService.getRepos().subscribe((repos)=>{
    
      let repositories = repos.filter((repo)=>repo.name!="todosAngularSSRTest").sort((a,b)=>a.created_at<b.created_at?1:-1)

      let updated_repos: Repo[] = []
    
      repositories.map((repo)=>{
      this.images.map(image=>{
        let imageTest = image.includes(repo.name.split("-").join(" "))

          if(imageTest){
            updated_repos.push({...repo,image:image})
          }

        })
      })

      let descr_updated_repos:Repo[]= []

      updated_repos.map((repo)=>{
        this.descriptions.map((d)=>{
          let search_string = repo.name.split("-").join(" ")
        
            if(JSON.stringify(d).includes(search_string)){
              let description = JSON.stringify(d).split(":")[1]
              let trim_curls = description.substring(1,description.length-2)
              descr_updated_repos.push({...repo,description:trim_curls})
            }
        })
      
      })

      this.repos = descr_updated_repos
    })//end of service subscription

  }//end of function

}
