var app = {
	views: {},
	models: {},
	loadTemplates: function(views, callback) {

		var deferreds = [];

		$.each(views, function(index, view) {
			if (!app[view]) {
				deferreds.push($.get('js/templates/' + view + '.html', function(data) {
					app[view] = _.template(data);
				}, 'html'));
			} else {
				alert(view + " not found");
			}
		});

		$.when.apply(null, deferreds).done(callback);
	}
};

app.Router = Backbone.Router.extend({
	routes: {
		'': 'home'
	},
	home: function() {
		app.headerView = new app.HeaderView({
			template: app.Header
		});
		$('#content').html(app.headerView.render().el);
	}
});

$(document).on("ready", function() {
	app.loadTemplates(['Header', 'Contact'],
		function() {
			app.router = new app.Router();
			Backbone.history.start();
		});
});