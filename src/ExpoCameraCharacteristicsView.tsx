import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoCameraCharacteristicsViewProps } from './ExpoCameraCharacteristics.types';

const NativeView: React.ComponentType<ExpoCameraCharacteristicsViewProps> =
  requireNativeViewManager('ExpoCameraCharacteristics');

export default function ExpoCameraCharacteristicsView(props: ExpoCameraCharacteristicsViewProps) {
  return <NativeView {...props} />;
}
