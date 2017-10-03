var AllNotices = React.createClass({

    render() {
            var items= this.props.items.map((item) => {
                return (
                    <div>
                        <ItemNotice item={item} />
                    </div>
                )
            });

        return(
            <div>
                {items}
            </div>
        )
    }
});