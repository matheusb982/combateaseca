var BodyOne = React.createClass({
    getInitialState() {
        return { items: [] }
    },


    componentDidMount() {
        $.getJSON('/api/v1/cities.json', (response) => { this.setState({ items: response }) });
    },



    handleSubmit(item) {
        var newState = this.state.items.concat(item);
        this.setState({ items: newState })
    },


    handleDelete(id) {
        $.ajax({
            url: `/api/v1/cities/${id}`,
            type: 'DELETE',
            success:() => {
               this.removeItemClient(id);
            }
        });
    },

    removeItemClient(id) {
        var newItems = this.state.items.filter((item) => {
            return item.id != id;
        });

        this.setState({ items: newItems });
    },



    handleUpdate(item) {
        $.ajax({
                url: `/api/v1/cities/${item.id}`,
                type: 'PUT',
                data: { city: item },
                success: () => {
                    this.updateItems(item);

                }
            }
        )},

    updateItems(item) {
        var items = this.state.items.filter((i) => { return i.id != item.id });
        items.push(item);

        this.setState({items: items });
    },


    render() {
        return (
            <div>
                <NewCity handleSubmit={this.handleSubmit}/>
                <AllCities  items={this.state.items}  handleDelete={this.handleDelete} onUpdate={this.handleUpdate}/>
            </div>
        )
    }
});
