
declare module '@theme/CodeBlock' {
  import type {ReactElement} from 'react';

  export interface Props {
    readonly children: string | ReactElement;
    readonly className?: string;
    readonly metastring?: string;
    readonly title?: string;
    readonly language?: string;
  }

  export default function CodeBlock(props: Props): JSX.Element;
}

declare module '@theme/TabItem' {
  import type {ReactNode} from 'react';

  export interface Props {
    readonly children: ReactNode ;
    readonly value: string;
    readonly default?: boolean;
    readonly label?: string;
    readonly hidden?: boolean;
    readonly className?: string;
    readonly attributes?: {[key: string]: unknown};
  }

  export default function TabItem(props: Props): JSX.Element;
}

declare module '@theme/Tabs' {
  import type {ReactElement} from 'react';
  import type {Props as TabItemProps} from '@theme/TabItem';

  export interface Props {
    readonly lazy?: boolean;
    readonly block?: boolean;
    readonly children: readonly ReactElement<TabItemProps>[];
    readonly defaultValue?: string | null;
    readonly values?: readonly {
      value: string;
      label?: string;
      attributes?: {[key: string]: unknown};
    }[];
    readonly groupId?: string;
    readonly className?: string;
  }

  export default function Tabs(props: Props): JSX.Element;
}