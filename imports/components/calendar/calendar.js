import './calendar.html'

Session.set('month', 0)
Session.set('selectedDate', moment().valueOf())

Template.calendar.helpers({
  weekDays(){
    return [
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat'
    ]
  },
  week(index){
    return Array(42).fill(0).map((a,i)=>{
      return moment().add(Session.get('month'), 'month').startOf('month').startOf('week').add(i, 'd').valueOf()
    }).slice(index*7, (index*7)+7)
  },
  month(){
    return moment().add(Session.get('month'), 'month')
  },
  outOfMonth(day){
    return moment(day).isBefore(moment().add(Session.get('month'), 'month').startOf('month')) || moment(day).isAfter(moment().add(Session.get('month'), 'month').endOf('month'))
  },
  today(day){
    return moment(day).isSame(moment(), 'day')
  },
  isSelectedDate(day){
    return moment(day).isSame(Session.get('selectedDate'), 'day')
  },
  part(array, a, b){
    return array.slice(a, b)
  },
  loop(a){
    return Array(a).fill(0)
  },
  events(day){
    return Events.find({date:day}).fetch()
  },
  eventMargins(){
    return `margin-left:calc(${(moment(this.startTime).format('H')/24)*100}% - 4px); margin-right:calc(${(1-moment(this.endTime).format('H')/24)*100}% - 4px);`
  }
})

Template.calendar.events({
  'click .day'(e){
    Session.set('selectedDate', moment(this).valueOf())
  },
  'click #PrevMonth'(){
    Session.set('month', Session.get('month') - 1)
  },
  'click #NextMonth'(){
    Session.set('month', Session.get('month') + 1)
  }
})