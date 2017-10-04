var Item = React.createClass({
    getInitialState() {
        return {editable: false}
    },
    handleEdit() {
        if(this.state.editable) {
            var name = this.refs.name.value;
            var id = this.props.item.id;
            var description = this.refs.description.value;
            var item = {id: id , name: name , description: description};
            this.props.handleUpdate(item);

        }
        this.setState({ editable: !this.state.editable })
    },

    render() {
        var name = this.state.editable ? <input type='text' ref='name' defaultValue={this.props.item.name} /> : <p>{this.props.item.name}</p>;
        var description = this.state.editable ? <input type='text' ref='description' defaultValue={this.props.item.description} />: <p>{this.props.item.description}</p>;
        return (
            <tr>
                <td>
                    {name}
                </td>
                <td>
                    {description}
                </td>
                <td>
                    <div className='pull-right'>
                      <button onClick={this.handleEdit} className="btn btn-info"><i className="fa fa-pencil"></i> </button>
                      &nbsp;<button onClick={this.props.handleDelete} className="btn btn-danger"><i className="fa fa-trash"></i></button>
                    </div>
                </td>
            </tr>
        )
    }
});
