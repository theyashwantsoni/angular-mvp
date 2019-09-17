import { ChangeDetectionStrategy, Component, Input,OnInit,OnDestroy,EventEmitter,Output } from '@angular/core';
import { TestPresenter } from './test.presenter';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
export class Test{
    login:string;
    name:string;
    blog:string;
}
@Component({
    selector: 'app-test-ui',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TestPresenter],
  })

  export class TestComponent {
    @Input() name: Test;
    @Input() repos: any[];
    @Output() lang:EventEmitter<string> = new EventEmitter();
    @Output() search:EventEmitter<string> = new EventEmitter();
    private destroy: Subject<void> = new Subject();

    constructor(private presenter: TestPresenter) {}

    ngOnInit(){

        this.presenter.searchTerms$.pipe(
            takeUntil(this.destroy),
          ).subscribe(term => {
              console.log('qwer',term)
              this.search.emit(term);
          });



        this.presenter.add$.pipe(
            takeUntil(this.destroy),
        ).subscribe(name => this.lang.emit(name));

    }
    ngOnDestroy(): void {
        this.destroy.next();
        this.destroy.complete();
    }
    addSkill(name: string): void {
        this.presenter.addSkill(name);
    }
    searchSelectedSkill(string){
        this.presenter.search(name);
    }
  }
  