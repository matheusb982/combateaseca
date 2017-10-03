var ItemNotice = React.createClass({
    getInitialState() {
        return {editable: false}
    },

    render() {

        return (


            <div className="container">


                <div className="col-md-6">
                    <img width="80%" height="80%"  src ="/assets/notice.jpg" />
                </div>


                <div className="col-md-6">
                    <h3>{this.props.item.name}</h3>
                    <ul>
                      {this.props.item.description}
                    </ul>
                </div>

            </div>

        )

    }
});
