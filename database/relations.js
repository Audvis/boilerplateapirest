// User types
// const User = require('./models/User');
// const Promoter = require('./models/Promoter');


//user - comment
// User.hasMany(Comment);
// Comment.belongsTo(User);

//user - event
// User.belongsToMany(Event , { through: 'event_fav_user' });
// Event.belongsToMany(User , { through: 'event_fav_user' });

//event - comment
// Event.hasMany(Comment);
// Comment.belongsTo(Event);


//event-location
// Location.hasMany(Event);
// Event.belongsTo(Location);

//promoter-event
// Promoter.hasMany(Event);
// Event.belongsTo(Promoter);


