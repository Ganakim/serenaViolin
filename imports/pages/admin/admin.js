import './admin.html'

Session.set('selectedEvent', false)
Session.set('selectedMedia', false)
Session.set('previewSrc', false)

Template.admin.helpers({
  checkAdmin(){
    Meteor.call('checkAdmin', (err, res)=>{
      if(err || !res){
        FlowRouter.go('/login')
      }
    })
  },
  adminLinks(){
    return [
      'Messages',
      'Events',
      'Media'
    ]
  },
  eventParts(){
    return [
      {part:'name', text:'Name'},
      {part:'date', text:'Date'},
      {part:'loc', text:'Location'},
      {part:'desc', text:'Description'},
    ]
  },
  selectedEvent(){
    return Session.get('selectedEvent')
  },
  selectedMedia(){
    return Session.get('selectedMedia')
  },
  previewSrc(){
    return Session.get('previewSrc')
  }
})

Template.admin.events({
  'click .adminLink'(){
    $('.adminLink').removeClass('bg-primary text-white')
    $(`#${this}Btn`).addClass('bg-primary text-white')
    $('.adminTab').addClass('h-0').removeClass('h-100')
    $(`#${this.toString()}`).addClass('h-100').removeClass('h-0')
  },
  'click #ClearEvent'(e){
    Session.set('selectedEvent', false)
  },
  'click #NewEvent, click #UpdateEvent, click #RemoveEvent'(e){
    e.preventDefault()
    var form = $(e.target).closest('form')[0]
    var formData = {
      name:form.Name.value,
      date:moment(form.Date.value).valueOf(),
      startTime:moment(`${form.StartTimeH.value}:${form.StartTimeM.value} ${form.StartTimeA.value}`, 'h:mm a').valueOf(),
      endTime:moment(`${form.EndTimeH.value}:${form.EndTimeM.value} ${form.EndTimeA.value}`, 'h:mm a').valueOf(),
      location:form.Location.value,
      description:form.Description.value
    }
    if(Session.get('selectedEvent')){
      formData['id'] = Session.get('selectedEvent')._id
    }
    if(e.target.id == 'RemoveEvent'){
      Modal('Are you sure?', 'Yes', 'Cancel', ()=>{
        Meteor.call(e.target.id, formData)
      })
    }else{
      Meteor.call(e.target.id, formData)
    }
    form.Name.value = ''
    form.Date.value = ''
    form.StartTimeH.value = ''
    form.StartTimeM.value = ''
    form.StartTimeA.value = ''
    form.EndTimeH.value = ''
    form.EndTimeM.value = ''
    form.EndTimeA.value = ''
    form.Location.value = ''
    form.Description.value = ''
    Session.set('selectedEvent', false)
  },
  'click .eventBtn'(){
    Session.set('selectedEvent', this)
  },
  'click .msgHead'(e){
    if($(`#${this._id} .msgBody`).hasClass('h-0')){
      $('.msgBody').addClass('h-0')
      $(`#${this._id} .msgBody`).removeClass('h-0')
    }else{
      $(`#${this._id} .msgBody`).addClass('h-0')
    }
  },
  'click .msgDelete'(){
    Modal('Are you sure?','Yes','Cancel',()=>{
      Meteor.call('removeMessage', this._id)
    })
  },
  'change #Src'(){
    Session.set('previewSrc',{src:$('#Src').val(),type:/\.(png|jpg|svg|jpeg|gif)$/gmi.test($('#Src').val()) ? 'img' : 'vid'})
  }
})
