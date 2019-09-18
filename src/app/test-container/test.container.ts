import { ChangeDetectionStrategy, Component ,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TestService } from '../test.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-test-container',
  templateUrl: './test.container.html',
})
export class TestContainerComponent implements OnInit{
  // topHeroes$:any;
  constructor(private testservice: TestService) {}
  topHeroes$ : Observable<any> = this.testservice.getHeroes()
  repos$: Observable<any> = this.testservice.getRepos().pipe(
    map(heroes => heroes),
  );
  selectedLangs: any[] = [];
  ngOnInit(){
    // this.testservice.getHeroes().subscribe(
    //   data => this.topHeroes$ =data
    //   )
  }
  handleEmit(arg:string){
    this.selectedLangs.push(arg);
    console.log(this.selectedLangs);
  }
  handleSearchInput(arg:string){
    for(let i=0;i<this.selectedLangs.length;i++){
      if(this.selectedLangs[i].toLowerCase() == arg.toLowerCase()){
        console.log('boom',i);
        
      }
    }
  }
}
