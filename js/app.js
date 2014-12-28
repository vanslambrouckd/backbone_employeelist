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
        '': 'home',
        'contact': 'contact'
    },
    initialize: function() {
        app.pageView = new app.PageView({
            template: app.Page
        });

        console.log('init');
        $('body').html(app.pageView.render().el);
        this.$content = $('#content');
    },
    home: function() {
        app.homeView = new app.HomeView({
            template: app.Home
        });
        this.$content.html(app.homeView.render().el);
        app.pageView.selectMenuItem('menuitem-home');
    },
    contact: function() {
        app.contactView = new app.ContactView({
            template: app.Contact
        });
        this.$content.html(app.contactView.render().el);
        app.pageView.selectMenuItem('menuitem-contact');
    }
});

$(document).on("ready", function() {
    app.loadTemplates(['Page', 'Home', 'Contact'], function() {
        console.log('templates loaded');
        app.router = new app.Router();
        Backbone.history.start();
    });
});