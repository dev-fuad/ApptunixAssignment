import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import moment from 'moment';

import { calendarStyles as styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CalendarCell = ({ inDates, date, outDates, inDateStart }) => {
  if (inDates > date) {
    return <Text style={styles.inoutDate}>{inDateStart + date}</Text>;
  } else if (outDates <= date) {
    return <Text style={styles.inoutDate}>{`${date - outDates + 1}`}</Text>;
  } else {
    return <Text style={styles.date}>{`${date - inDates + 1}`}</Text>;
  }
};

const renderCells = (date) => {
  const cells = [];

  const inDates = parseInt(
    moment(date)
      .startOf('M')
      .format('d'),
    10,
  );
  const outDates = moment(date).daysInMonth() + inDates;
  const inDatesCount =
    moment(date)
      .add(-1, 'M')
      .daysInMonth() -
    inDates +
    1;

  for (let i = 0; i < 42; i++) {
    cells.push(
      <View key={i.toString()} style={styles.calendarCell}>
        <CalendarCell
          inDateStart={inDatesCount}
          inDates={inDates}
          date={i}
          outDates={outDates}
        />
      </View>
    );
  }

  return cells;
};

const CalendarTab = () => {
  const [date, setDate] = useState(moment());

  const nextMonth = () => setDate(moment(date).add(1, 'M'));
  const prevMonth = () => setDate(moment(date).add(-1, 'M'));

  return (
    <View style={styles.container}>
      <View style={styles.monthView}>
        <TouchableOpacity style={styles.changeView} onPress={prevMonth}>
          <Text style={styles.changeText}>«</Text>
        </TouchableOpacity>
        <Text style={styles.month}>{date.format('MMMM, YYYY')}</Text>
        <TouchableOpacity style={styles.changeView} onPress={nextMonth}>
          <Text style={styles.changeText}>»</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.calendar}>
        {moment.weekdaysShort().map(item => (
          <View key={item} style={[styles.calendarCell, styles.dayCell]}>
            <Text style={styles.day}>{item}</Text>
          </View>
        ))}
        {renderCells(date)}
      </View>
    </View>
  );
};

export default CalendarTab;
