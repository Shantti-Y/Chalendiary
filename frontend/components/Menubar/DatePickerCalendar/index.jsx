import React from 'react';
import { connect } from 'react-redux';
import './style.scss';

import { Button } from '@material-ui/core';
import { DateRange } from '@material-ui/icons';

import moment from 'moment';
import "moment/locale/ja";
import "moment/locale/en-au";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider, InlineDatePicker } from 'material-ui-pickers';

import MenuHeader from '@components/MenuHeader';

import { changeCurrentDate } from '@store/actions/date';

class DatePickerCalendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: this.props.currentDate
    }

    this.updateSelectedDate = this.updateSelectedDate.bind(this);
  }

  updateSelectedDate(date) {
    this.setState({
      ...this.state,
      selectedDate: date.format('YYYY/MM/DD')
    });
  }

  componentDidUpdate(prevProps){
    if(prevProps.currentDate !== this.props.currentDate){
      this.setState({
        ...this.state,
        selectedDate: this.props.currentDate
      });
    }
  }

  render() {
    const { updateSelectedDate } = this;
    const { selectedDate } = this.state;
    const { currentDate, onSubmitDate } = this.props;

    const momentClassSelectedDate = moment(selectedDate, 'YYYY/MM/DD');

    return (
      <div>
        <MenuHeader icon={<DateRange />} label="Calendar" />
        <div>
          <MuiPickersUtilsProvider utils={MomentUtils} >
            <InlineDatePicker
              label="Select a date"
              value={momentClassSelectedDate}
              onChange={updateSelectedDate}
            />
          </MuiPickersUtilsProvider>
        </div>
        
        <Button onClick={() => onSubmitDate(momentClassSelectedDate.format('YYYY/MM/DD'))}>MOVE TO {selectedDate}</Button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentDate: state.date.currentDate
});

// TODO: it should be delete later because it may violate functional component's principle
const mapDispatchToProps = {
  onSubmitDate: date => changeCurrentDate({ date })
};

export default connect(mapStateToProps, mapDispatchToProps)(DatePickerCalendar);