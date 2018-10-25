import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { TdMediaService } from '@covalent/core/media';
import { TdLayoutManageListComponent } from '@covalent/core/layout';
import { getDirection } from '../../utilities/direction';

import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/markArea';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/legendScroll';
import 'echarts/lib/component/dataZoom';

import { TdCollapseAnimation, TdRotateAnimation, TdFadeInOutAnimation } from '@covalent/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';
import { share, tap, distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-chart-types-docs',
  templateUrl: './chart-types-docs.component.html',
  styleUrls: ['./chart-types-docs.component.scss'],
  animations: [TdCollapseAnimation(), TdRotateAnimation(), TdFadeInOutAnimation()],
})
export class ChartTypesDocsComponent implements AfterViewInit {

  private _margin: BehaviorSubject<string> = new BehaviorSubject('0'); 

  get margin(): Observable<string> {
    return this._margin.asObservable().pipe(share());
  }

  @ViewChild('manageList')
  manageList: TdLayoutManageListComponent;
  
  miniNav: boolean = false;
  hideCoreComponent: boolean = false;
  hideAtomicComponent: boolean = false;
  mediaGTSM: Observable<any>;
  dir: 'ltr' | 'rtl';

  routes: Object[] = [
    {
      description: 'List of all examples including in the documentation',
      icon: 'picture_in_picture',
      route: '.',
      title: 'Chart Types',
    },
    {
      description: 'Atomic and Config Options',
      icon: 'insert_chart',
      route: 'bar',
      title: 'Bar',
    },
    {
      description: 'Atomic and Config Options',
      icon: 'show_chart',
      route: 'line',
      title: 'Line',
    },
    {
      description: 'Atomic and Config Options',
      icon: 'bubble_chart',
      route: 'scatter',
      title: 'Scatter',
    },
    {
      description: 'Example using line/bar and 2 y-axis',
      icon: 'multiline_chart',
      route: 'combination',
      title: 'Combination',
    },
  ];

  atomicComponentRoutes: Object[] = [
    {
      description: 'Series component, determines chart type and series styling.',
      icon: 'style',
      route: '',
      title: 'Series',
    },
    {
      description: 'Global tooltip component, enable/disable and other tooltip level options.',
      icon: 'info',
      route: '',
      title: 'Tooltip',
    },
    {
      description: 'X-Axis component, x-axis styling and other options',
      icon: 'trending_flat',
      route: '',
      title: 'X-Axis',
    },
    {
      description: 'Y-Axis component, y-axis styling and other options',
      icon: 'trending_up',
      route: '',
      title: 'Y-Axis',
    },
    {
      description: 'Chart legend options, including position and styling.',
      icon: 'text_fields',
      route: '',
      title: 'Legend',
    },
    {
      description: 'Series Tooltip, extends from main tooltip settings and provides specific series level control.',
      icon: 'info',
      route: '',
      title: 'Series Tooltip',
    },
  ];

  constructor(public media: TdMediaService) {
    this.dir = getDirection();
    this.mediaGTSM = media.registerQuery('gt-sm').pipe( 
      distinctUntilChanged(),
      debounceTime(50),
      tap((gtSm: boolean) => {
      if (!gtSm) {
        if (this.dir === 'ltr') {
        this._margin.next('0');
        }
        this.manageList.opened = false;
      } else {
        this.checkMiniNav();
      }
    }),
    share());
  }

  handleDirEmitter(event: 'ltr' | 'rtl'): void {
    this.dir = event;
  }

  toggleMiniNav(event: Event): void {
    event.stopPropagation();
    this.miniNav = !this.miniNav;
    this.checkMiniNav();

  }

  checkMiniNav(): void {
    if (this.miniNav) {
      this._margin.next('64');
    } else {
      this._margin.next('250');
    }
    this.restMiniNav();
  }

  openMiniNav(event: Event): void {
    event.stopPropagation();
    this.miniNav = !this.miniNav;
    this._margin.next('250');
    this.restMiniNav();
  }

  restMiniNav(): void {
    this.manageList.opened = false;
    setTimeout(() => {
      this.manageList.opened = true;
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.handleDirEmitter(this.dir);
      this.media.broadcast();
    });
  }
}
