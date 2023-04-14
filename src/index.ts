import ExpoCameraCharacteristicsModule from "./ExpoCameraCharacteristicsModule";

export function getFocalLength(): string {
  return ExpoCameraCharacteristicsModule.getFocalLength();
}

export function getSensorHeight(): string {
  return ExpoCameraCharacteristicsModule.getSensorHeight();
}

export function getSensorWidth(): string {
  return ExpoCameraCharacteristicsModule.getSensorWidth();
}
