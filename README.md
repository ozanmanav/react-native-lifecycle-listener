# react-native-lifecycle-listener

## Getting started

`$ npm install react-native-lifecycle-listener --save`

### Mostly automatic installation

`$ react-native link react-native-lifecycle-listener`

### Manual installation

#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-lifecycle-listener` and add `RNLifecycleListener.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNLifecycleListener.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`

- Add `import com.reactlibrary.RNLifecycleListenerPackage;` to the imports at the top of the file
- Add `new RNLifecycleListenerPackage()` to the list returned by the `getPackages()` method

2. Append the following lines to `android/settings.gradle`:
   ```
   include ':react-native-lifecycle-listener'
   project(':react-native-lifecycle-listener').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-lifecycle-listener/android')
   ```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
   ```
     compile project(':react-native-lifecycle-listener')
   ```

## Usage

```javascript
import RNLifecycleListener from "react-native-lifecycle-listener";

RNLifecycleListener.addEventListener("onResumeRN", () => {
  console.log("App Resumed");
});
RNLifecycleListener.addEventListener("onPauseRN", () => {
  console.log("App Paused");
});
RNLifecycleListener.addEventListener("onDestroyRN", () => {
  console.log("App Destroyed");
});
```
