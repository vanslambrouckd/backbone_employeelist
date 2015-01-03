var app = {
    views: {},
    models: {},
    loadTemplates: function(views, callback) {

        var deferreds = [];

        $.each(views, function(index, view) {
            if (!app[view]) {
                //console.log('js/templates/' + view + '.html');
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
        'contact': 'contact',
        'employees/:id': 'employeeDetails'
    },
    initialize: function() {
        app.pageView = new app.PageView({
            template: app.Page
        });

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
    },
    employeeDetails: function(id) {
        console.clear();
        var self = this;

        var employee = new app.Employee({
            id: id
        });

        employee.fetch({
            success: function(data) {
                //console.log('app.EmployeeDetails', app.EmployeeDetails);
                //console.log('data', data);

                var employeeDetailsView = new app.EmployeeDetailsView({
                    template: app.EmployeeDetails,
                    model: data
                });

                //console.log('employeeDetailsView 1206', employeeDetailsView.render().el);
                self.$content.html(employeeDetailsView.render().el);
            }
        });
    }
});

$(document).on("ready", function() {
    app.loadTemplates(['Page', 'Home', 'Contact', 'EmployeeDetails', 'EmployeeSummaryView'], function() {
        //console.log('templates loaded');
        app.router = new app.Router();
        Backbone.history.start();
    });
});