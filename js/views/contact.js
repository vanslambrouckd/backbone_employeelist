app.ContactView = Backbone.View.extend({
    initialize: function(options) {
        this.options = options || {};
        this.template = this.options.template;
        console.log('template', this.template());
    },
    render: function() {
        this.$el.html(this.template);
        return this;
    }
});