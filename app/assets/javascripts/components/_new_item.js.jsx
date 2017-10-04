var NewItem= React.createClass({
    handleClick() {
        var name    = this.refs.name.value;
        var description = this.refs.description.value;
        $.ajax({
            url: '/api/v1/items',
            type: 'POST',
            data: { item: { name: name, description: description } },
            success: (item) => {
                this.props.handleSubmit(item);
            }
        });
    },
    render() {
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-offset-1 col-md-10">
                <div className="form-group">
                  <input type="text" className="form-control form-control-custom" ref='name' placeholder='Entre com o título da notícia'/>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control form-control-custom" ref='description' placeholder='Entre com a descrição'/>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-md btn-custom btn-noborder-radius" onClick={this.handleClick}>
                    SALVAR
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-offset-1 col-md-10">
                <div className="text-center">
                  <h2>Notícias</h2>
                </div>
              </div>
            </div>
          </div>
        )
    }
});
