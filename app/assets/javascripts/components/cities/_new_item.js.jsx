var NewCity= React.createClass({
    handleClick() {
        var name    = this.refs.name.value;
        var description = this.refs.description.value;
        $.ajax({
            url: '/api/v1/cities',
            type: 'POST',
            data: { city: { name: name, description: description } },
            success: (city) => {
                this.props.handleSubmit(city);
            }
        });
    },
    render() {
        return (
                <div>
                    <input ref='name' placeholder='Entre com o nome da cidade' /><br/><br/>
                    <input ref='description' placeholder='Entre com a descrição' />
                    <button onClick={this.handleClick}>Salvar</button><br/><br/>
                    <h1>Cidades</h1><br/>
                </div>

        )
    }
});
