var Menu = React.createClass({
    render() {
        return (
          <nav className="navbar navbar-inverse navbar-fixed-top">
          	<div className="container">
          		<div className="navbar-header">
          			<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          				<span className="sr-only">Toggle navigation</span>
          				<span className="icon-bar"></span>
          				<span className="icon-bar"></span>
          				<span className="icon-bar"></span>
          			</button>
          			<a className="navbar-brand" href="/admin"><img alt="company logo" src="/assets/images/logo.png"/></a>
          		</div>
          		<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          			<ul className="nav navbar-nav navbar-right custom-menu">
                  <li><a href='/admin'>Home</a></li>
                  <li><a href='/site'>Notícias</a></li>
                  <li><a href='/city'>Cidades Com O Projeto</a></li>
                  <li><a href='/welcome'>Site</a></li>
                  <li><a href="/users/edit"><span className="glyphicon glyphicon-user"></span> Editar </a></li>
                  <li><a href="/users/sign_out"><span className="glyphicon glyphicon-log-in"></span> Sair </a></li>
          			</ul>
          		</div>
          	</div>
          </nav>
        )
    }
});
