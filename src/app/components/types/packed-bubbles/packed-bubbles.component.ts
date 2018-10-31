import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
} from '@angular/core';
import 'echarts/lib/chart/custom';
import { hierarchy, pack } from 'd3-hierarchy';
import { ConsoleReporter } from 'jasmine';
const flare: any = require('./flare.json');

@Component({
  selector: 'types-packed-bubbles',
  templateUrl: './packed-bubbles.component.html',
  styleUrls: ['./packed-bubbles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
})
export class TypesPackedBubblesComponent implements AfterViewInit {
  children: any;
  config: any = {
    xAxis: {},
    yAxis: {},
    series: [{
        type: 'custom',
        renderItem: function(params, api) {
          console.log(params, api.coord(params))
  let children: any[] = [];
  let coordDims: string[] = ['x', 'y'];
  function classes(root: any): any {
    const classes: any[] = [];
    function recurse(name, node): any {
      if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
      else classes.push({packageName: name, className: node.name, value: node.size});
    }
    recurse(null, root);
    return {children: classes};
  }

  const root = hierarchy(classes(flare))
.sum((d) => { return d.value; })
.sort((a, b) => { return b.value - a.value; });

  const context = params.context;
  if (!context.layout) {
    params.dataIndex === 0
      ? pack()
          .size([api.getWidth() - 2, api.getHeight() - 2])
          .padding(1.5)(root)
      : null;
    context.layout = {};
    root.descendants().forEach(node => {
      console.log(node);
      children.push({
        type: 'circle',
        shape: {
          x: node.x,
          y: node.y,
          r: node.r,
        },
        style: api.style({
          text: node.data.packageName,
          fontSize: 9,
        }),
        styleEmphasis: api.styleEmphasis(),
      });
    });
  }
  // const nodePath = this.config.series.data[params.dataIndex].name;
  // const itemLayout = context.layout[nodePath];
  // let nodeName = nodePath;

  console.log(children);
  return children;
        },
        data: [flare],
    }],
};

renderItem(params, api): any {
  

}
ngAfterViewInit() {
  console.log(this.config)
}
}
