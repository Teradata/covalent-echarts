# Covalent ECharts

## Installing Covalent Echarts

```bash
npm install --save @covalent/echarts
```

To test (only for testing!) the latest changes from develop, install the nightly build:

```bash
npm install --save https://github.com/Teradata/covalent-echarts-nightly.git
```

## Setup

Import the [CovalentBaseEchartsModule] in your NgModule:

```typescript
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentBarEchartsModule } from '@covalent/echarts/bar';
import { CovalentTooltipEchartsModule } from '@covalent/echarts/tooltip';
@NgModule({
  imports: [
    CovalentBaseEchartsModule,
    CovalentBarEchartsModule,
    CovalentTooltipEchartsModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Basic Example:

```html
<td-chart [style.height.px]="300">
  <td-chart-tooltip [trigger]="'item'"
                    [textStyle]="{ color: '#818181' }"
                    [backgroundColor]="'#ffffff'">
    <ng-template let-params let-ticket="ticket" tdTooltipFormatter>
      <ng-container *ngIf="params">
        <div layout="row" layout-align="start center">
          <mat-icon>
            <span [style.color]="params.color">people</span>
          </mat-icon>
          <span class="mat-caption pad-left-sm">
            {{params.seriesName + ': ' + params.value}}
          </span>
        </div>
      </ng-container>
    </ng-template>
  </td-chart-tooltip>
  <td-chart-x-axis [show]="true"
                    [position]="'bottom'"
                    [type]="'category'"
                    [data]="['Electronics', 'Toys', 'Grocery', 'Appliances', 'Automotive', 'Sports']"
                    [boundaryGap]="true">
  </td-chart-x-axis>
  <td-chart-y-axis [show]="true"
                    [type]="'value'"
                    [position]="'right'"
                    [max]="200">
  </td-chart-y-axis>
  <td-chart-series td-bar
                  [data]="[150, 130, 150, 120, 150, 120]"
                  [name]="'Today'"
                  [color]="'#F2724B'">
  </td-chart-series>
</td-chart>
```
