import React from "react";
import Tab from "./tab";
import Tabs from "./tabs";

function InicioORegistro (){
    return(
        <div class="iniciooregistrocard text-center d-flex col-md-4 ms-auto">
            <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                    <Tabs>
                        <Tab label="Pestaña 1">
                            <div class="card-body">
                                <h5 class="card-title">Iniciar sesion</h5>
                                <label for="recipient-name" class="col-form-label">Gmail:</label>
                                <input type="text" class="form-control" id="recipient-name"/>
                                <label for="recipient-name" class="col-form-label">Contrsaeña:</label>
                                <input type="text" class="form-control" id="recipient-name"/>
                                <p></p>
                                <a href="#" class="button2 btn btn-primary">Aceptar</a>
                                <p></p>
                            </div>
                        </Tab>
                        <Tab label="Pestaña 2">
                            <div class="card-body">
                                <h5 class="card-title">Registrarse</h5>
                                <label for="recipient-name" class="col-form-label">Gmail:</label>
                                <input type="text" class="form-control" id="recipient-name"/>
                                <label for="recipient-name" class="col-form-label">Contrsaeña:</label>
                                <input type="text" class="form-control" id="recipient-name"/>
                                <label for="recipient-name" class="col-form-label">Confirmar Contrsaeña:</label>
                                <input type="text" class="form-control" id="recipient-name"/>
                                <p></p>
                                <a href="#" class="button2 btn btn-primary">Aceptar</a>
                                <p></p>
                            </div>
                        </Tab>
                    </Tabs>
                </ul>
            </div>
        </div>
    );
};
export default InicioORegistro;
    