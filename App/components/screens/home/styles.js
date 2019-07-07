import { StyleSheet } from 'react-native';

import { statusBarHeight, chinHeight, vw } from '../../../utilities';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: statusBarHeight,
    paddingBottom: chinHeight,
  },
});

export const calendarStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  monthView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  month: {
    fontSize: 16,
  },
  changeView: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderColor: '#BBB',
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  changeText: {
    fontSize: 32,
    textAlignVertical: 'center',
    lineHeight: 32,
  },
  calendar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: vw(98),
    marginHorizontal: vw(1),
  },
  calendarCell: {
    width: vw(14),
    height: vw(14),
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayCell: {
    height: 30,
  },
  day: {
    fontWeight: 'bold',
    fontSize: 13,
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    width: '95%',
    textAlign: 'center',
  },
  date: {
    fontSize: 14,
  },
  inoutDate: {
    fontSize: 14,
    color: '#AAA',
  },
});

export const checkListStyles = StyleSheet.create({
  container: { flex: 1 },
  total: {
    fontSize: 16,
    textAlign: 'right',
    padding: 10,
    paddingHorizontal: 30,
  },
  listContent: { padding: 10 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 14,
  },
  check: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
