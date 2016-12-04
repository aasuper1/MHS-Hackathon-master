Router.configure({
	layoutTemplate: 'layout'

});
Router.route('/', {name:'homepage'});
Router.route('/logout', {name:"logout"});
Router.route('/home',{name:'home'});
Router.route('/profile',{name:'profiles'});
Router.route('/friendslist',{name:'friendslist'});
Router.route('/addfriend',{name:'addfriend'});
Router.route('/game',{name:'game'});
Router.route('/leaderboard',{name:"leaderboard"});
