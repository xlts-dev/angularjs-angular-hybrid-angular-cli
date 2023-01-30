import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  static selector = 'appComponent';
  private readonly destroyed: Subject<void> = new Subject<void>();

  @Input() name: string = 'Material';

  constructor(
    public breakpointObserver: BreakpointObserver,
    private notificationService: ToastrService
  ) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(({breakpoints}: BreakpointState) => {
        const [breakpointInfo] = Object.entries(breakpoints).filter(([, value]) => !!value).map(([key]) => key);
        this.notificationService.info(breakpointInfo);
      })
  }

  ngOnDestroy(): void {
    this.destroyed.next();
  }
}
