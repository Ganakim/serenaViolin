import './contact.html'

Template.contact.helpers({
  socialMedias(){
    return [
      {name:'youtube',path:'',icon:'youtube'},
      {name:'pintrest',path:'',icon:'pintrest'},
      {name:'facebook',path:'',icon:'facebook-square'}
    ]
  }
})

Template.contact.events({
  'submit #Message'(e){
    e.preventDefault()
    Meteor.call('newMessage', {
      name:{
        first:e.target.Fname.value,
        last:e.target.Lname.value
      },
      email:e.target.Email.value,
      subject:e.target.Subject.value,
      message:e.target.Message.value,
      timestamp:moment().valueOf()
    })
  }
})
