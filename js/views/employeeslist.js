app.EmployeesListView = Backbone.View.extend({
    tagName: 'ul',
    initialize: function(options) {
        this.options = options || {};
        this.model.on('reset', this.render, this);
    },
    render: function() {
        console.log('listrender');
        var self = this;
        this.$el.empty();
        _.each(this.model.models, function(employee) {
            //console.log('EMP', employee.get('firstName'));
            var fullName = employee.get('firstName') + ' ' + employee.get('lastName');
            self.$el.append('<li>' + fullName + '</li>')
        });

        return this;
    }
});

app.EmployeesListItemView = Backbone.View.extend({
    tagName: 'li',
    initialize: function(options) {
        this.options = options || {};

    },
    render: function() {}
});