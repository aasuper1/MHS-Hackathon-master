Template.friendslist.helpers({
	//friends function, which returns 
	friends: function (){
		// creates the list of friends that match you
		var friendlist = Friends.find({userId:Meteor.userId()}).fetch()
		// creates an array to return the friends you have and their data
		var friends = [];
		//for loop taking all of the user data for your friend and returning it in a collection.
		for(var i = 0; i<friendlist.length;i++) {
			// pulls data for all people that are your friends
			friends[i]=Profile.find({userId:friendlist[i].friendId}).fetch()[0]
		}
		console.log(friends);
		//returns it to the html to display in the list
		return friends;
	}

})
Template.friendslist.helpers({
	friend: function() {
		console.log("this ran")
		return (Friends.find({userId:Meteor.userId()}).fetch().length>0)
	}
})