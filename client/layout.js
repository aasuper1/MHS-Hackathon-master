Template.layout.helpers({
	login:function() {
		for (i=0;i<Meteor.users.find().fetch().length;i++) {
			if(Meteor.userId()==Meteor.users.find().fetch()[i]._id) {
				
				return false;
			}
		}
		
		return true;
	},
	name:function() {
		if (Profile.find({userId:Meteor.userId()}).fetch().length < 1){
		for (i=0;i<Meteor.users.find().fetch().length;i++) {
			if(Meteor.userId()==Meteor.users.find().fetch()[i]._id) {
				return Meteor.user().emails[0].address.split("@")[0];

			}
		}
		}
		else if (Profile.find({userId:Meteor.userId()}).fetch().length >= 1){
			return Profile.find({userId:Meteor.userId()}).fetch()[0].username
		}	
		return "hello";
	}

})