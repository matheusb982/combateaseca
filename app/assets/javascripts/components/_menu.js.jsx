var Menu = React.createClass({
    render() {
        return (
        <nav className="navbar navbar-inverse">
          <div class="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Combate A Seca</a>
            </div>

            <ul className="nav navbar-nav">
              <li><a href='/admin'>Home</a></li>
              <li><a href='/site'>Notícias</a></li>
              <li><a href='/city'>Cidades Com O Projeto</a></li>
              <li><a href='/welcome'>Site</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/users/edit"><span className="glyphicon glyphicon-user"></span> Editar </a></li>
              <li><a href="/users/sign_out"><span className="glyphicon glyphicon-log-in"></span> Sair </a></li>
            </ul>
          </div>
        </nav>
        )
    }
});
