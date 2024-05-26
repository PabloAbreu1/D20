function Navbar (){
return(
        <nav className="navbar bg-danger">
            <div className="container-fluid d-flex ">
                <a className="navbar-brand">
                    <img src="https://rollthedice.online/assets/images/dice/1x1/d20_dice_1x1.png" alt="D20" width="50" height="50"/>
                    D20
                    </a>
                    <a type="button" className="buttonInicio btn" href="Inicio-De-Sesion">Iniciar Sesion</a>
             </div>
        </nav>
        );
};
export default Navbar;
