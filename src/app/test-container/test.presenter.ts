import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

export class TestPresenter {
  private searchTerms: Subject<string> = new Subject();
  searchTerms$: Observable<string> = this.searchTerms.pipe(
    // wait 300ms after each keystroke before considering the term
    debounceTime(300),

    // ignore new term if same as previous term
    // distinctUntilChanged(),
  );

  search(term: string): void {
    this.searchTerms.next(term);
  }


  private add: Subject<string> = new Subject();
  add$: Observable<string> = this.add.asObservable();

  public addSkill(name: string): void {
    if(name == null){
        return;
    }
    name = name.trim();
    
    if (!name) {
      return;
    }
    console.log(name);
    this.add.next(name);
  }
}
