
package com.ozanmanav.rnlifecyclelistener;

import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.Map;

public class RNLifecycleListenerModule extends ReactContextBaseJavaModule implements LifecycleEventListener {

  private final ReactApplicationContext reactContext;

  public RNLifecycleListenerModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;

    reactContext.addLifecycleEventListener(this);
  }


  @Override
  public String getName() {
    return "RNLifecycleListener";
  }

  @Override
  public void onHostResume() {
    getReactApplicationContext()
            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
            .emit("onResumeRN", null);
  }

  @Override
  public void onHostPause() {
    getReactApplicationContext()
            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
            .emit("onPauseRN", null);
  }

  @Override
  public void onHostDestroy() {
    getReactApplicationContext()
            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
            .emit("onDestroyRN", null);
  }
}