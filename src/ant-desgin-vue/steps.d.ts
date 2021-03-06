import { VNode } from 'vue';

import { AntdVueComponent } from './component';

type Status = 'wait' | 'process' | 'finish' | 'error';
/** ASteps Layout Component */
export declare class ASteps extends AntdVueComponent {
  current: number

  direction: 'horizontal' | 'vertical'

  progressDot: boolean | VNode

  size: 'small' | 'default'

  status: Status
}
