# @appandflow/expo-camera-characteristics

[![npm (scoped)](https://img.shields.io/npm/v/@appandflow/expo-camera-characteristics.svg)](https://www.npmjs.com/package/@appandflow/expo-camera-characteristics)

Expo Camera Characteristics exposes the rear camera's characteristics such as the sensor size, the focal length and the image resolution. 

**On Android**, the Camera2 module is used to get the camera characteristics programmatically. 

**On iOS**, there is no accessible module to do so (see https://stackoverflow.com/questions/13190932/how-to-find-out-focal-length-of-camera-in-ios-and-what-is-the-sensor-height for the existing work around), therefore, the values returned by the library are hardcoded here: https://github.com/AppAndFlow/expo-camera-characteristics/blob/main/src/iPhoneSpecs.ts. We'll try to maintain that list up to date as much as possible.


# Installation

This library needs expo-device for iOS.

```
expo install @appandflow/expo-camera-characteristics expo-device
```
You must also add this chunk to your app.json

```
{
	"expo": {
		plugins: [
			["@appandflow/expo-camera-characteristics", {}]
		]
	}
}
```

# API documentation

## getCameraCharacteristics()
```
import  *  as  expoCameraCharacteristics  from  '@appandflow/expo-camera-characteristics';

const cameraCharacteristics: {  
	focalLength: number;  
	sensorSize: {  
		height: number;  
		width: number;  
	};  
	imageResolution: {  
		height: number;  
		width: number;  
	}
} = expoCameraCharacteristics.getCameraCharacteristics();
```
