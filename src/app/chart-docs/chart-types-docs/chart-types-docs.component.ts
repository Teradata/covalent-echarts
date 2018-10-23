import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { TdMediaService } from '@covalent/core/media';
import { TdLayoutManageListComponent } from '@covalent/core/layout';
import { getDirection } from '../../utilities/direction';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/markArea';
import 'echarts/lib/component/tooltip';

import { TdCollapseAnimation, TdRotateAnimation, TdFadeInOutAnimation } from '@covalent/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';
import { share, tap } from 'rxjs/operators';

@Component({
  selector: 'app-chart-types-docs',
  templateUrl: './chart-types-docs.component.html',
  styleUrls: ['./chart-types-docs.component.scss'],
  animations: [TdCollapseAnimation(), TdRotateAnimation(), TdFadeInOutAnimation()],
})
export class ChartTypesDocsComponent implements AfterViewInit {

  @ViewChild('manageList')
  manageList: TdLayoutManageListComponent;
  
  miniNav: boolean = false;
  hideCoreComponent: boolean = false;
  hideAtomicComponent: boolean = false;
  _margin: BehaviorSubject<string> = new BehaviorSubject('250'); 
  mediaGTSM: Observable<any>;
  dir: 'ltr' | 'rtl';
  marginDirection: string;

  get margin(): Observable<string> {
    return this._margin.asObservable().pipe(share());
  }

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
    // {
    //   description: 'Atomic and Config Options',
    //   icon: 'attach_file',
    //   route: 'file-upload',
    //   title: 'NPath',
    // },
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
    this.mediaGTSM = media.registerQuery('gt-sm').pipe(tap((gtSm: boolean) => {
      if (!gtSm) {
        this._margin.next('0');
      } else {
        this.checkMiniNav();
      }
    }),
    share());
  }

  handleDirEmitter(event: 'ltr' | 'rtl'): void {
    this.dir = event;
    this._margin.subscribe((d: any) => {
      if (this.dir === 'rtl') {
        this.marginDirection = '0';
        this.restMiniNav();
      } else {
        this.marginDirection = undefined;
      }
    });

  }

  toggleMiniNav(event): void {
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
    }, 10);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.handleDirEmitter(this.dir);
      this.media.broadcast();
    });
  }
}
