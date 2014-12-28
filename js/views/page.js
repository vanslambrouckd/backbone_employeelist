app.PageView = Backbone.View.extend({
    events: {
        'keyup #search-box': 'search'
    },
    initialize: function(options) {
        this.options = options || {};
        this.template = this.options.template;
        this.searchResults = new app.Employees();
        this.searchResultsView = new app.EmployeesListView({
            model: this.searchResults
        });
        /*
        $('.ui.search')
            .search({
                source: content
            });
*/
    },
    render: function() {
        this.$el.html(this.template);
        $('#searchresults', this.$el).html(this.searchResultsView.render().el);
        return this;
    },
    selectMenuItem: function(idMenuItem) {
        $('.menu .item').removeClass('active');
        $('#' + idMenuItem).addClass('active');
    },
    search: function(event) {
        event.preventDefault();
        var searchVal = $('#search-box').val();

        this.searchResults.fetch({
            reset: true,
            data: {
                name: searchVal
            }
        });
    }
});