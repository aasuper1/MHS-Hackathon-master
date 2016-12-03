Template.homepage.helpers({
login:function() {
		if (Meteor.users.find({_id:Meteor.userId()}).fetch().length>0) {
			return true;
		}
		return false;
		
	},
move:function(){
	Router.go("/home");
	return -1;
}
})