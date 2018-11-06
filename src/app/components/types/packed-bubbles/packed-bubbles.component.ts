import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import 'echarts/lib/chart/graph';
import { hierarchy, pack } from 'd3-hierarchy';
const flare: any = require('./flare.json');

@Component({
  selector: 'types-packed-bubbles',
  templateUrl: './packed-bubbles.component.html',
  styleUrls: ['./packed-bubbles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
})
export class TypesPackedBubblesComponent implements AfterViewInit {

  @ViewChild('atomic') atomic: ElementRef<HTMLElement>;
  @ViewChild('jsObject') jsObject: ElementRef<HTMLElement>;

  height: number = 800; // default height
  width: number = 800; // default width
  config: any;
  nodes: any;
  colors: any[] = [
    '#c23531',
    '#2f4554',
    '#61a0a8',
    '#d48265',
    '#91c7ae',
    '#749f83',
    '#ca8622',
    '#bda29a',
    '#6e7074',
    '#546570',
    '#c4ccd3',
  ];

  checkSize(): void {
    this.width = (<HTMLElement>(
      this.atomic.nativeElement
    )).getBoundingClientRect().width;
    this.height = (<HTMLElement>(
      this.atomic.nativeElement
    )).getBoundingClientRect().height;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.checkSize();
      this.nodes = this.graphTransform();
      this.config = {
        tooltip: {},
        xAxis: { show: false },
        yAxis: { show: false },
        series: [
          {
            type: 'graph',
            layout: 'none',
            data: this.nodes,
          },
        ],
      };
    });
  }

  reset(): void {
    this.checkSize();
    this.config.series[0].data = this.nodes;
    this.config = {...this.config};
  }

  tansformData(root: any): any {
    const arrayClasses: any[] = [];
    function recurseTree(name: any, node: any): any {
      if (node.children) {
        node.children.forEach(function(child: any): any {
          recurseTree(node.name, child);
        });
      } else {
        arrayClasses.push({
          packageName: name,
          className: node.name,
          value: node.size,
          actual: node.size,
        });
      }
    }
    recurseTree(undefined, root);
    return { children: arrayClasses };
  }

  graphTransform(): any {
    let nodes: any[] = [];
    let count: number = 0;
    const d3Root: any = hierarchy(this.tansformData(flare));
    
    const sum: any = d3Root.sum((d: any) => {
      return d.value;
    });
    const sort: any = sum.sort((a: any, b: any) => {
      return b.value - a.value;
    });
    if (sort) {
      pack().size([this.width, this.height])(d3Root);
    }
    d3Root.descendants().map((node: any, index: number) => {
      if (count >= this.colors.length - 1) {
        count = 0;
      }
      if (node.data.className) {
        const newObject: any = {
          id: index,
          label: { normal: { show: node.r > 33 } },
          emphasis: { label: { show: true } },
          itemStyle: { normal: { color: this.colors[count] } },
          name: `${node.data.className} \n ${node.data.actual}`,
          symbolSize: node.r,
          x: node.x,
          y: node.y,
        };
        nodes.push(newObject);
      }
      count++;
    });
    return nodes;
  }
}
