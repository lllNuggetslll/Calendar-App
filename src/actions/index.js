export const FETCH_EVENTS = 'FETCH_EVENTS';
export const ADD_EVENT = 'ADD_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';
export const EDIT_EVENT = 'EDIT_EVENT'

export function fetchEvents() {
  return {
    type: FETCH_EVENTS
  };
}

export function addEvent(event) {
  return {
    type: ADD_EVENT,
    payload: event
  }
}

export function deleteEvent(events) {
  return {
    type: DELETE_EVENT,
    payload: events
  }
}

export function editEvent(events) {
  return {
    type: EDIT_EVENT,
    payload: events
  }
}
