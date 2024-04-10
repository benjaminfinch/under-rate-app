const Newsletter = () => {
    return (
      	<section className="newsletterBacking text-center p-5">
		<div className="container p-3 text-center">
			<div className="row">
			    <h2 className="newsletterFont pb-10">Suscríbete a nuestro newsletter</h2>
			</div>
			<div className="row ">
			    <form action="#" method="Post">
				<div className="col-4 offset-4 justify-content-center pt-20"><input placeholder="Ingresa tu correo electrónico"  type="email" className="form-control inputNews" id="exampleInputEmail1"></input></div>
					<a target="blank" href="#" className="main-btn mt-30">Suscríbete</a>
			    </form>
            </div>
		</div>
	</section>
    );
  };
  export default Newsletter;