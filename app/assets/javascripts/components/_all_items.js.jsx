var AllItems = React.createClass({
    handleDelete(id) {
        this.props.handleDelete(id);
    },

    onUpdate(item) {
        this.props.onUpdate(item);
    },

    render() {
            var items= this.props.items.map((item) => {
                return (
                    <tbody key={item.id}>
                        <Item item={item}
                        handleDelete={this.handleDelete.bind(this, item.id)}
                        handleUpdate={this.onUpdate}/>
                    </tbody>
                )
            });

        return(
            <div className="container">
              <div className="row">
                <div className="col-md-offset-1 col-md-10">
                  <table className="table table-striped">
                      <thead>
                        <tr>
                          <th className="col-md-3">Nome</th>
                          <th className="col-md-4">Descrição</th>
                          <th className="col-md-2">Opções</th>
                        </tr>
                      </thead>
                      {items}
                    </table>
                    <br/><br/><br/>
                </div>
              </div>
            </div>
        )
    }
});
