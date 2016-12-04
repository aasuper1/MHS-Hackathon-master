Template.leaderboard.helpers({
	score:function(){
		return Profile.find({},{limit:10,
                        sort:{highscore:-1}}).fetch()
	}
})