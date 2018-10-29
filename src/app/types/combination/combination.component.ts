import { Component, ChangeDetectionStrategy } from '@angular/core';
import { comboConfig } from '../../data/combination-data';

@Component({
  selector: 'types-combination',
  templateUrl: './combination.component.html',
  styleUrls: ['./combination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
})
export class TypesCombinationComponent {

  /** 
   * This component is intentionally left simple for brevity as the data is 
   * normally requested via an API which would include Angular 
   * life-cycle hooks and other considerations.
   * 
   */
  comboConfig: any = comboConfig;

}
