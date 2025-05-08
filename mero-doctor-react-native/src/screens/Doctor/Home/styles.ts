import {StyleSheet} from 'react-native';
import {FONTS} from '../../../style/fonts';
import theme from '../../../style/theme';
import color from '../../../style/color';

export const stylesHome = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    marginTop: 10,
    padding:4,
  },

  box: {
    // transform: [{translateX: 300}],
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'contain' depending on what you want
    justifyContent: 'center',
  },
  summarySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 12,
  },
  blueAppointmentInfo: {
    backgroundColor: theme?.colors?.blue?.blue10,
  },
  greenAppointmentInfo: {
    backgroundColor: theme?.colors?.green?.green10,
  },
  appointmentInfoHeader: {
    paddingVertical: 12,
  },
  appointmentInfoTitle: {
    fontSize: theme?.fontSizes?.custom?.[12],
    fontFamily: FONTS.SEMIBOLD,
    lineHeight: 18,
    color: theme?.colors?.blue?.blue100,
  },
  appointmentInfoValue: {
    fontSize: theme?.fontSizes?.custom?.[12],
    fontFamily: FONTS.SEMIBOLD,
  },
  scheduleHeader: {
    // flex: 2,
    paddingVertical: 4,
    backgroundColor: theme?.colors?.blue?.blue80,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  scheduleHeaderContent: {
    marginHorizontal: 50,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  scheduleHeaderText: {
    color: 'white',
    fontFamily: FONTS.SEMIBOLD,
  },
  upArrowContainer: {
    marginTop: -5,
  },
  customScheduleContainer: {
    // backgroundColor: theme?.colors?.blue?.blue80,
    backgroundColor: color.blue.blue80,
  },
  backgroundImage: {
    width: '100%',
    // flex: 14,
    // height: '100%',
  },

  timelineContainer: {
    flex: 1,
    flexDirection: 'row',
    // position: 'relative',
    // Remove the backgroundColor if it exists
    // backgroundColor:'red'
  },
  // timelineContainer: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   position: 'relative',
  //   // backgroundColor:'red'
  // },
  currentTimeIndicator: {
    position: 'absolute',
    zIndex: 433,
  },
  timeRow: {
    flexDirection: 'row',
  },
  timeBox: {
    width: 60,
    height: 28,
    backgroundColor: 'orange',
    padding: 5,
    flex: 2,
    borderRadius: 16,
    paddingHorizontal: 10,
  },
  timeText: {
    color: color.neutral.white,
    fontFamily: FONTS.SEMIBOLD,
  },
  timeLine: {
    flex: 4,
    width: 340,
    height: 2,
    backgroundColor: 'orange',
    marginTop: 12,
  },
  timelineLeft: {
    flex: 0.6,
    // marginHorizontal: 12,
    // paddingLeft: 16,
    paddingLeft: 40,
    marginRight:12,
    // backgroundColor:color.blue.blue80
  },
  appointmentsList: {
    // flex: 6,
    // gap: 4,
    // marginRight: 8,
    flexWrap:'wrap',
    // paddingRight:16,
    paddingTop: 25,
    // backgroundColor:'red',
    paddingHorizontal:12,
    paddingLeft:20

  },
  appointmentItem: {
    marginBottom: 20,
    // paddingHorizontal:12,
    // backgroundColor:'red',
    // paddingLeft:12,
    width:'85%',
    flexWrap:'wrap'
  },
  appointmentHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 8,
  },
  countContainer: {
    marginTop: 8,
  },
  chartCard: {
    margin: 10,
    backgroundColor: color.neutral.white,
    borderRadius: 10,
    elevation: 1,
    flexWrap: 'wrap',
  },
  chartAxisText: {
    fontFamily: FONTS.REGULAR,
  },
  pointerLabelContainer: {
    height: 90,
    width: 100,
    justifyContent: 'center',
    marginTop: -30,
    marginLeft: -40,
  },
  pointerDateText: {
    color: 'white',
    fontSize: 14,
    fontFamily: FONTS.REGULAR,
    marginBottom: 6,
    textAlign: 'center',
  },
  pointerValueContainer: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: 'white',
  },
  pointerValueText: {
    fontFamily: FONTS.BOLD,
    textAlign: 'center',
  },
  dataPoint: {
    position: 'absolute',
    left: -6,
    top: -6,
    height: 12,
    width: 12,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: theme?.colors?.blue?.blue100,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataPointInner: {
    height: 4,
    width: 4,
    backgroundColor: theme?.colors?.blue?.blue100,
    borderRadius: 4,
  },
  tooltip: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: '#4CAF50',
    padding: 6,
    borderRadius: 4,
  },
  tooltipText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  topSection: {
    flex: 0,
    minHeight: 180,
  },
  appointmentsContainer: {
    flex: 1,
    backgroundColor: color.blue.blue80,
  },
  chartsContainer: {
    flex: 1,
    backgroundColor: color.neutral.white,
    marginHorizontal: 6,
  },
});
