// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

function events() {
  const evts = {};

  function on(eventName, callback) {
    if (evts[eventName]) return evts[eventName].push(callback);
    return (evts[eventName] = [callback]);
  }

  function trigger(eventName) {
    if (evts[eventName]) {
      evts[eventName].forEach(callback => callback());
    }
  }

  function off(eventName) {
    delete evts[eventName];
  }

  return {
    on,
    off,
    trigger
  };
}

export default events;
