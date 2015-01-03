app.PageView = Backbone.View.extend({
    events: {
        //'keyup #search-box': 'search'
    },
    initialize: function(options) {
        this.options = options || {};
        this.template = this.options.template;
        this.searchResults = new app.Employees();
        this.searchResultsView = new app.EmployeesListView({
            model: this.searchResults
        });
    },
    render: function() {
        //this.$el.html(this.template);
        this.$el.append(this.template);
        //$('#searchresults', this.$el).html(this.searchResultsView.render().el);

        console.log('renderr');
        var content = [
            {
                title: 'Andorrs'
            },
            {
                title: 'United Arab Emirates'
            },
            {
                title: 'Afghanistas'
            },
            {
                title: 'Antigus'
            },
            {
                title: 'Anguills'
            },
            {
                title: 'Albanis'
            },
            {
                title: 'Armenis'
            },
            {
                title: 'Netherlands Antilles'
            },
            {
                title: 'Angols'
            },
            {
                title: 'Argentins'
            },
            {
                title: 'American Samos'
            },
            {
                title: 'Austris'
            },
            {
                title: 'Australis'
            },
            {
                title: 'Arubs'
            },
            {
                title: 'Aland Islands'
            },
            {
                title: 'Azerbaijas'
            },
            {
                title: 'Bosnis'
            }
            // etc
        ];

        $('.ui.search', this.el)
            .search({
                type: 'simple',
                source: content

            });
        ;


        return this;
    },
    selectMenuItem: function(idMenuItem) {
        $('.menu .item').removeClass('active');
        $('#' + idMenuItem).addClass('active');
    },
    search: function(event) {
        var self = this;
        event.preventDefault();
        var searchVal = $('#search-box').val();

        this.searchResults.fetch({
            reset: true,
            data: {
                name: searchVal
            },
            success: function(data) {
                /*
                var results = data.toJSON();
                console.log('results', results);

                $('.ui.search', self.el)
                    .search({
                        type: 'simple',
                        source: results,
                        searchFields: [
                            'firstName'
                        ],
                        verbose: true
                    });
                ;
                */
            }
        });
    }
});