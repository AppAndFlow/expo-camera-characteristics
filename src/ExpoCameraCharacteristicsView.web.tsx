import * as React from 'react';

import { ExpoCameraCharacteristicsViewProps } from './ExpoCameraCharacteristics.types';

export default function ExpoCameraCharacteristicsView(props: ExpoCameraCharacteristicsViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
