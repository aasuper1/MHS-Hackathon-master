Session.set("running",false);
var sizeincreaser;
Session.set("score",0);
Template.game.events({
	'click #start' : function() {
		if (Session.get("running")) {
		Session.set("running",false)
		clearInterval(sizeincreaser);
		//$(".bottle").css({bottom:"-395px"})
		//var counter = 1;
		//rotate = setInterval(function(){
		  //$('#wholebottle').css({
            //'-webkit-transform':'rotate('+10*counter+'deg)', 
            //'-moz-transform':'rotate('+10*counter+'deg)',
            //'transform':'rotate('+10*counter+'deg)'
       // });
		 // counter = counter+1;
		 // if(counter!=37){
		  //	clearInterval(rotate);
		//  }
  	//	},50);
		var x = ($(".bottle").height()/357)*100;
		var percentage = (105)/((1/244)*Math.pow((x-33),2)+1)-5;
		var random = Math.random()*100;
		console.log(random)
		console.log(percentage)

		
		if (random<percentage) {
			alert("hit")
			Session.set("score",Session.get("score")+1)
			$(".bottle").height(0);
		}
		else {
			alert("miss")
			if (Profile.find({userId:Meteor.userId()}).fetch()[0].highscore<Session.get("score")){
				var toinsert = Profile.find({userId:Meteor.userId()}).fetch()[0]
			//changes the username to whatever you changed it to
			toinsert.highscore= Session.get("score");
			//puts the new profile onto the server
			Profile.update({_id:toinsert._id},toinsert)
			}
			Session.set("score",0)
			$(".bottle").height(0);

		}
		

		}
		else {
		Session.set("running",true)
		randomnumber = Math.round(Math.random()*(Session.get("score")+1)*5)
		console.log(randomnumber);
		sizeincreaser = setInterval(function(){
            if ($(".bottle").height()<357){

			$(".bottle").height($(".bottle").height()+randomnumber+1)
            }
		}, 50);

		}
	}
})
Template.game.rendered = function() {
	 $(".bottle").on(function() {
	 console.log("clicking");
})
	}

Template.game.helpers({
	startorstop:function(){
		if(!Session.get("running")) {
		
		return "Start"
		
		}
		else {
		
		return "Stop"
		}
	},
	buttoncolor:function(){
		if(!Session.get("running")) {
		return "success"
		}
		return "warning"
	},
	score:function(){
		return Session.get("score")
	},
	bottom:function(){
		console.log($(".bottle").position().top)
		return ($(window).height()-$(".bottle").position().top+$(".bottle").height());
	},
	highscore:function(){
		return Profile.find({userId:Meteor.userId()}).fetch()[0].highscore
	}
})