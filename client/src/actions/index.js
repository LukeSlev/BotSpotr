import io from 'socket.io-client';
export const DATA_RECEIVED = 'DATA_RECEIVED';
const socket = io.connect("http://localhost:5000");

export function receiveData(data) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  console.log("new data: bot count=, human count= ", data.bot_count, data.human_count);
  return {
    type: DATA_RECEIVED,
    payload: data
  };
}

export function subscribeToTimer(cb) {
  socket.on('dataUpdated', data => cb(null, data));
  socket.emit('subscribeToTimer', 1000);
}

export function clearData() {
  socket.emit('clearData');
}