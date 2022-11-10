
import React from 'react';
import Cartwidget from '../CartWidget/CartWidget';




function NavBar() {
    

    return (
        <React.Fragment>
            <>
			    <nav className="logo">
                    <div class="container">
                    
                    
				    
				            <div class="navbar bg-info">
                            <a class="active" href="/"><i className="fa fa-fw fa-home"></i> Home</a> 
                            <a href="/"><i className="fa fa-fw fa-search"></i> Search</a> 
                            <a href="/"><i className="fa fa-fw fa-envelope"></i>TIPO</a> 
                            <a href="/"><i className="fa fa-fw fa-user"></i> Login</a>
                            <a href="/"><i className=""></i><Cartwidget/></a>

                            </div>
                    </div>

                
                    
			    </nav>
		    </>
        </React.Fragment>
    );
}

export default NavBar;