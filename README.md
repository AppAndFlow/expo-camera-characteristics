# @appandflow/expo-camera-characteristics

[![npm (scoped)](https://img.shields.io/npm/v/@appandflow/expo-camera-characteristics.svg)](https://www.npmjs.com/package/@appandflow/expo-camera-characteristics)

This library exposes the rear camera's characteristics such as the sensor size, the focal length and the image resolution.

**On Android**, the Camera2 module is used to get the camera characteristics programmatically.

**On iOS**, there is no accessible module to do so (see https://stackoverflow.com/questions/13190932/how-to-find-out-focal-length-of-camera-in-ios-and-what-is-the-sensor-height for the existing work around), therefore, the values returned by this library are hardcoded here: https://github.com/AppAndFlow/expo-camera-characteristics/blob/main/src/iPhoneSpecs.ts. We'll try to maintain that list of devices up to date as much as possible.

# Installation

This library needs expo-device for iOS.

```
expo install @appandflow/expo-camera-characteristics expo-device
```

> This package cannot be used in the "Expo Go" app because [it requires custom native code](https://docs.expo.io/workflow/customizing/).

After installing this npm package, add the [config plugin](https://docs.expo.io/guides/config-plugins/) to the [`plugins`](https://docs.expo.io/versions/latest/config/app/#plugins) array of your `app.json` or `app.config.js`:

```JSON
{
  "expo": {
    "plugins": [["@appandflow/expo-camera-characteristics", {}]]
  }
}

```

And finally, rebuild your app as described in the ["Adding custom native code"](https://docs.expo.io/workflow/customizing/) guide.

```
npx expo prebuild
```

# API documentation

## getCameraCharacteristics()

```TS
import * as expoCameraCharacteristics from "@appandflow/expo-camera-characteristics";

const cameraCharacteristics: {
  focalLength: number;
  sensorSize: {
    height: number;
    width: number;
  };
  imageResolution: {
    height: number;
    width: number;
  };
} = expoCameraCharacteristics.getCameraCharacteristics();
```
