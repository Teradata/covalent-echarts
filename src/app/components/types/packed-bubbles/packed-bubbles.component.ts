import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import 'echarts/lib/chart/custom';
import { hierarchy, pack } from 'd3-hierarchy';
const flare: any = require('./flare.json');
import { TdChartComponent } from '@covalent/echarts/base';
import { Subject } from 'rxjs';

@Component({
  selector: 'types-packed-bubbles',
  templateUrl: './packed-bubbles.component.html',
  styleUrls: ['./packed-bubbles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
})
export class TypesPackedBubblesComponent {
  
  @ViewChild(TdChartComponent, {read: ElementRef}) chartComponent: ElementRef<any>;

  colorCount: number = 0;
  canvasWidth: number = 300;
  canvasWidth$: Subject<number> = new Subject<number>();

  canvasHeight: number = 300;
  const colors: any[] = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83',  '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'];
  
  children: any = this.packTransform(this.canvasWidth, this.canvasHeight);

  config: any = {
  xAxis: { show: false },
  yAxis: { show: false },
  series: [{
    type: 'custom',
    renderItem: this.renderItem.bind(this),
    data: this.children,
  }],
};

event: any;
  
  clickHandler(event: any): void {
    if (event.hasOwnProperty('componentType')) {
      this.event = event;
    }

    console.log(event);
  }

  renderItem(params: any, api: any): any {
    this.colorCount++;
    if (api.getWidth() > 0 && (this.canvasWidth !== api.getWidth() || this.canvasHeight !== api.getHeight())) {
      this.config.series[0].data = this.packTransform(api.getWidth(), api.getHeight());
      this.config = {...this.config};
    }
    if ( this.colorCount >= this.colors.length - 1) {
      this.colorCount = 0;
    }
    this.canvasWidth = api.getWidth();
    this.canvasHeight = api.getHeight();
    const currentColor: string = this.colors[this.colorCount];

    return {
      type: 'circle',
  
      shape: {
        cx: api.value(0),
        cy: api.value(1),
        r: api.value(2),
      },
      style: api.style({
        fill: currentColor,
        text: api.value(3),
        textStroke: currentColor,
        fontSize: 9,
      }),
      styleEmphasis: api.styleEmphasis({
        textStroke: currentColor,
      }),
    };
  }

  packTransform(width: number, height: number): any {
    let children: any[] = [];
    function classes(root: any): any {
      const arrayClasses: any[] = [];
      function recurse(name: any, node: any): any { 
        if (node.children) {
          node.children.forEach(function (child: any): any { recurse(node.name, child); });
        } else {
  
          arrayClasses.push({ packageName: name, className: node.name, value: node.size, actual: node.size });
        }
  
      }
      recurse(undefined, root);
      return { children: arrayClasses };
    }

    const d3Root: any = hierarchy(classes(flare));
    const sum: any = d3Root.sum((d: any) => { return d.value; });
    const sort: any = sum.sort((a: any, b: any) => { return b.value - a.value; });
    if (sort) { 
      pack().size([width - 100, height - 100]).padding(1.5)(d3Root); 
    }
    d3Root.descendants().forEach((node: any) => {
      if (node.data.className) {
        children.push([node.x, node.y, node.r, node.data.className, node.data.actual]);
      }
    });
    return children;
  }
}
