package expo.modules.cameracharacteristics


import android.content.Context
import android.hardware.camera2.CameraManager;
import android.hardware.camera2.CameraCharacteristics;
import android.graphics.ImageFormat;

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition




class ExpoCameraCharacteristicsModule : Module() {




  override fun definition() = ModuleDefinition {
    Name("ExpoCameraCharacteristics")



    Function("getFocalLength") {
      val cameraManager = context.getSystemService(Context.CAMERA_SERVICE) as CameraManager
      val firstCameraId = cameraManager.cameraIdList[0]
      val cameraCharacteristics = cameraManager.getCameraCharacteristics(firstCameraId) as CameraCharacteristics
      val focalLength = (cameraCharacteristics.get(CameraCharacteristics.LENS_INFO_AVAILABLE_FOCAL_LENGTHS))?.get(0)
      return@Function focalLength
    }

    Function("getSensorHeight") {
      val cameraManager = context.getSystemService(Context.CAMERA_SERVICE) as CameraManager
      val firstCameraId = cameraManager.cameraIdList[0]
      val cameraCharacteristics = cameraManager.getCameraCharacteristics(firstCameraId) as CameraCharacteristics
      val sensorHeight = (cameraCharacteristics.get(CameraCharacteristics.SENSOR_INFO_PHYSICAL_SIZE))?.getHeight()
     
      return@Function sensorHeight
    }

    Function("getSensorWidth") {
      val cameraManager = context.getSystemService(Context.CAMERA_SERVICE) as CameraManager
      val firstCameraId = cameraManager.cameraIdList[0]
      val cameraCharacteristics = cameraManager.getCameraCharacteristics(firstCameraId) as CameraCharacteristics
      val sensorWidth = (cameraCharacteristics.get(CameraCharacteristics.SENSOR_INFO_PHYSICAL_SIZE))?.getWidth()
     
      return@Function sensorWidth
    }

    Function("getImageResolutionHeight") {
      val cameraManager = context.getSystemService(Context.CAMERA_SERVICE) as CameraManager
      val firstCameraId = cameraManager.cameraIdList[0]
      val cameraCharacteristics = cameraManager.getCameraCharacteristics(firstCameraId) as CameraCharacteristics
      val choices = (cameraCharacteristics.get(CameraCharacteristics.SCALER_STREAM_CONFIGURATION_MAP))?.getOutputSizes(ImageFormat.JPEG)

      return@Function choices?.get(0)?.getHeight()
    }

    Function("getImageResolutionWidth") {
      val cameraManager = context.getSystemService(Context.CAMERA_SERVICE) as CameraManager
      val firstCameraId = cameraManager.cameraIdList[0]
      val cameraCharacteristics = cameraManager.getCameraCharacteristics(firstCameraId) as CameraCharacteristics
      val choices = (cameraCharacteristics.get(CameraCharacteristics.SCALER_STREAM_CONFIGURATION_MAP))?.getOutputSizes(ImageFormat.JPEG)

      return@Function choices?.get(0)?.getWidth()
    }

    
  }

  private val context
  get() = requireNotNull(appContext.reactContext)




}