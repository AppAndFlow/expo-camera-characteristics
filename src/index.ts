import ExpoCameraCharacteristicsModule from "./ExpoCameraCharacteristicsModule";

export function getFocalLength(): number {
  return ExpoCameraCharacteristicsModule.getFocalLength();
}

export function getSensorHeight(): number {
  return ExpoCameraCharacteristicsModule.getSensorHeight();
}

export function getSensorWidth(): number {
  return ExpoCameraCharacteristicsModule.getSensorWidth();
}

export function getImageResolutionHeight(): number {
  return ExpoCameraCharacteristicsModule.getImageResolutionHeight();
}

export function getImageResolutionWidth(): number {
  return ExpoCameraCharacteristicsModule.getImageResolutionWidth();
}
