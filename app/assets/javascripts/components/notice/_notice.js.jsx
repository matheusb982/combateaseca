var Notice = React.createClass({
	getInitialState() {
        return { items: [] }
    },


    componentDidMount() {
        $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
    },

    render() {
        return (
            <div>
                <AllNotices  items={this.state.items}/>
            </div>
        )
    }
});
