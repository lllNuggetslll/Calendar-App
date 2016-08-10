import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { addEvent } from '../actions/index';
import { Link } from 'react-router';

class AddEvent extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(props) {
    this.props.addEvent(props);
    this.context.router.push('/');
  }

  render() {
    const { fields: { date, time, event, description }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a New Event</h3>

        <div className={`form-group ${date.touched && date.invalid ? 'has-danger' : ''}`}>
          <label>Date</label>
          <input type='date' className='form-control' {...date} />
          <div className='text-help'>
            {date.touched ? date.error : ''}
          </div>
        </div>

        <div className={`form-group ${time.touched && time.invalid ? 'has-danger' : ''}`}>
          <label>Time</label>
          <input type='time' className='form-control' {...time} />
          <div className='text-help'>
            {time.touched ? time.error : ''}
          </div>
        </div>

        <div className={`form-group ${event.touched && event.invalid ? 'has-danger' : ''}`}>
          <label>Event</label>
          <textarea className='form-control' {...event} />
          <div className='text-help'>
            {event.touched ? event.error : ''}
          </div>
        </div>

        <div className={`form-group ${description.touched && description.invalid ? 'has-danger' : ''}`}>
          <label>Description</label>
          <textarea className='form-control' {...description} />
          <div className='text-help'>
            {description.touched ? description.error : ''}
          </div>
        </div>

        <button type='submit' className='btn btn-primary'>Submit</button>
        <Link to='/' className='btn btn-danger'>Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {}

  if (!values.date) {
    errors.date = 'Enter a date';
  }

  if (!values.time) {
    errors.time = 'Enter a time';
  }

  if (!values.event) {
    errors.event = 'Enter an event';
  }

  if (!values.description) {
    errors.description = 'Enter an description';
  }

  return errors
}

export default reduxForm({
  form: 'EventNewForm',
  fields: ['date', 'time', 'event', 'description'],
  validate
}, null, { addEvent })(AddEvent);
