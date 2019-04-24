import './login.html'

Template.login.events({
  'submit #Login'(e){
    e.preventDefault()
    Meteor.loginWithPassword(e.target.emailUser.value, e.target.password.value, (err)=>{
      if(err){
        console.log(err)
      }else{
        FlowRouter.go('/admin')
      }
    })
  }
})