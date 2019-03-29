import { Template } from 'meteor/templating'

import './main.html'
import './imports'

Template.body.helpers({
  page(){
    return Session.get('page')
  }
})
