import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoCameraCharacteristics.web.ts
// and on native platforms to ExpoCameraCharacteristics.ts
import ExpoCameraCharacteristicsModule from './ExpoCameraCharacteristicsModule';
import ExpoCameraCharacteristicsView from './ExpoCameraCharacteristicsView';
import { ChangeEventPayload, ExpoCameraCharacteristicsViewProps } from './ExpoCameraCharacteristics.types';

// Get the native constant value.
export const PI = ExpoCameraCharacteristicsModule.PI;

export function hello(): string {
  return ExpoCameraCharacteristicsModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoCameraCharacteristicsModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoCameraCharacteristicsModule ?? NativeModulesProxy.ExpoCameraCharacteristics);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoCameraCharacteristicsView, ExpoCameraCharacteristicsViewProps, ChangeEventPayload };
