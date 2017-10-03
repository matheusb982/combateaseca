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
                <div>
                    <input ref='name' placeholder='Entre com o título da notícia' /><br/><br/>
                    <input ref='description' placeholder='Entre com a descrição' />
                    <button onClick={this.handleClick}>Salvar</button><br/><br/>
                    <h1>Notícias</h1><br/>
                </div>

        )
    }
});
