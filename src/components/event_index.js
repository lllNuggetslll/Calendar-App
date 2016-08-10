import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents, addEvent, deleteEvent } from '../actions/index'
import { Link } from 'react-router';

class EventsIndex extends Component {
  constructor(props) {
    super(props)

    this.onDelete = this.onDelete.bind(this);
  }

  componentWillMount() {
    this.props.fetchEvents();
  }

  onDelete(value){
    value = value.index;
    const newProps = Array.from(this.props.events);
    newProps.splice(value, 1);
    this.props.deleteEvent(newProps);
  }

  renderEvents() {
    return this.props.events.map((event, index) => {
      return (
        <tr key={index}>
          <td><Link to={'event/' + index}>{event.date}</Link></td>
          <td><Link to={'event/' + index}>{event.time}</Link></td>
          <td><Link to={'event/' + index}>{event.event}</Link></td>
          <td><Link to={'event/' + index}>{event.description}</Link></td>
          <td><button value={index} onClick={index => {this.onDelete(index)}} className='btn-danger'>Delete</button></td>
        </tr>
      );
    });
  }

  render() {
    const addButton = <div className='text-xs-right'>
                        <Link to='/event/new' className='btn btn-primary'>
                          Add an event
                          </Link>
                      </div>

    if (this.props.events.length === 0) {
      return (
        <div>
          {addButton}
          <div>Please add an event</div>
        </div>
      )
    }

    return (
      <div>
        {addButton}
        <h3>Personal Agenda</h3>
        <table className='table table-bordered table-hover'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Event</th>
              <th>Description</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { events: state.events.all}
}

export default connect(mapStateToProps, { fetchEvents, addEvent, deleteEvent })(EventsIndex)
