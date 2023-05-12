import { Platform } from "react-native";
import ExpoCameraCharacteristicsModule from "./ExpoCameraCharacteristicsModule";
import iPhoneSpecs from "./iPhoneSpecs";
import * as Device from "expo-device";

const deviceModelName = Device.modelName || "";
const iphoneCharacteristics = iPhoneSpecs?.[deviceModelName] || {
  focalLength: 0,
  sensorSize: { height: 0, width: 0 },
  imageResolution: { height: 0, width: 0 },
};

function getFocalLength(): number {
  if (Platform.OS === "ios") {
    return iphoneCharacteristics.focalLength;
  }
  return ExpoCameraCharacteristicsModule.getFocalLength();
}

function getSensorHeight(): number {
  if (Platform.OS === "ios") {
    return iphoneCharacteristics.sensorSize.height;
  }
  return ExpoCameraCharacteristicsModule.getSensorHeight();
}

function getSensorWidth(): number {
  if (Platform.OS === "ios") {
    return iphoneCharacteristics.sensorSize.width;
  }
  return ExpoCameraCharacteristicsModule.getSensorWidth();
}

function getImageResolutionHeight(): number {
  if (Platform.OS === "ios") {
    return iphoneCharacteristics.imageResolution.height;
  }
  return ExpoCameraCharacteristicsModule.getImageResolutionHeight();
}

function getImageResolutionWidth(): number {
  if (Platform.OS === "ios") {
    return iphoneCharacteristics.imageResolution.width;
  }
  return ExpoCameraCharacteristicsModule.getImageResolutionWidth();
}

export function getCameraCharacteristics() {
  return {
    focalLength: getFocalLength(),
    sensorSize: {
      height: getSensorHeight(),
      width: getSensorWidth(),
    },
    imageResolution: {
      height: getImageResolutionHeight(),
      width: getImageResolutionWidth(),
    },
  };
}
