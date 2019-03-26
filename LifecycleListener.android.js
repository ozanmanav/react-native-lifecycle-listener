module.exports = React => {
  const DeviceEventEmitter = React.DeviceEventEmitter;

  const _eventHandlers = {
    onResumeRN: new Set(),
    onPauseRN: new Set(),
    onDestroyRN: new Set()
  };

  DeviceEventEmitter.addListener("onResumeRN", () => {
    _eventHandlers.onResumeRN.forEach(fn => fn());
  });

  DeviceEventEmitter.addListener("onPauseRN", () => {
    _eventHandlers.onPauseRN.forEach(fn => fn());
  });

  DeviceEventEmitter.addListener("onDestroyRN", () => {
    _eventHandlers.onDestroyRN.forEach(fn => fn());
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
