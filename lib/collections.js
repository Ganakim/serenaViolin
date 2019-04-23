Events = new Mongo.Collection('events')
Media = new Mongo.Collection('media')
Messages = new Mongo.Collection('messages')

// Events = {
//   Name:'string',
//   date:moment(),
//   startTime:moment(),
//   endTime:moment(),
//   location:'string',
//   description:'text',
// }

// Media = {
//   type:'pic' || 'vid',
//   src:'<url>',
//   thumb:'<url/path?>' || false,
//   name:'string',
//   event:'<event ID>' || false,
//   description:'text',
//   date:'<moment>',
//   externalLinks:'No idea'
// }

// Messages = {
//   name:{first:'string',last:'string'},
//   email:'string',
//   subject:'string'
//   message:'text',
//   timestamp:'moment'
// }

Collections = {
  // users: Meteor.users,
  Events: Events,
  Media:Media,
  Messages:Messages
}