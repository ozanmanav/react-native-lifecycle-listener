module.exports = React => {
  const DeviceEventEmitter = React.DeviceEventEmitter;

  const _eventHandlers = {
    onHostResume: new Set(),
    onHostPause: new Set(),
    onHostDestroy: new Set()
  };

  DeviceEventEmitter.addListener("onHostResume", () => {
    _eventHandlers.onHostResume.forEach(fn => fn());
  });

  DeviceEventEmitter.addListener("onHostPause", () => {
    _eventHandlers.onHostPause.forEach(fn => fn());
  });

  DeviceEventEmitter.addListener("onHostDestroy", () => {
    _eventHandlers.onHostDestroy.forEach(fn => fn());
  });

  return {
    addEventListener(type, handler) {
      _eventHandlers[type] && _eventHandlers[type].add(handler);
    },
    removeEventListener(type, handler) {
      _eventHandlers[type] && _eventHandlers[type].delete(handler);
    }
  };
};
