const Header = () => {
    return ( 
        <nav className="navbar navbar-expand bg-white shadow mb-4 topbar static-top navbar-light navbar-collapse" id="header">
        <div className="container-fluid" style={{flexGrow: 1}}>
          <div className="col-xl-11 col-xxl-11 col-auto flex-wrap d-flex" id="top">
            <div className="row" id="row_header">
              <div className="col-lg-3 col-xl-1 col-auto w-auto" style={{paddingLeft: '0px', marginRight: '9px', paddingRight: '0px'}}>
                <div style={{paddingTop: '8px'}}><span style={{fontWeight: 'bold', fontSize: '37px', color: 'rgb(2,60,63)', fontFamily: 'Adamina, serif', marginBottom: '1px', paddingBottom: '0px', paddingTop: '0px', marginTop: '0px'}}>OCCC</span></div>
              </div>
              <div className="col-xl-1 col-auto w-auto h-auto">
                <div style={{paddingTop: '6px'}}>
                  {/* Start: Clock-Real-Time */}
                  <div id="time" style={{background: '#ffffff', borderStyle: 'solid', borderColor: 'rgb(2,60,63)', marginBottom: '18px', paddingTop: '0px', paddingLeft: '23px', paddingBottom: '0px', borderRadius: 20, boxShadow: '0px 0px'}} />{/* End: Clock-Real-Time */}
                </div>
              </div>
              <div className="col-xl-2 col-xxl-2 col-auto w-auto h-auto" />
              <div className="col justify-content-center">
                {/* Start: Search form block */}
                <div className="container flex-column position-relative d-flex w-auto" style={{paddingLeft: '0px', marginRight: '3px', paddingRight: '0px'}}>
                  <div className="col-auto ml-auto mr-auto">
                    <form>
                      <div className="align-items-center form-row position-relative d-flex flex-wrap" style={{paddingTop: '15px'}}>
                        <div className="col-sm form-group mb-3"><input className="form-control form-control ps-4 pe-4 rounded-pill" type="text" name="search" placeholder="Search..." style={{background: 'rgb(218,218,218)'}} /></div>
                        <div className="col-sm-auto text-end form-group mb-3"><button className="btn btn-primary ps-4 pe-4 rounded-pill" type="submit"><i className="fa fa-search" /></button></div>
                      </div>
                    </form>
                  </div>
                </div>{/* End: Search form block */}
              </div>
              <div className="col-1 col-sm-1 col-xl-1 col-xxl-1 col-auto w-auto justify-content-end" style={{paddingLeft: '0px', marginRight: '1px', paddingRight: '0px'}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-bell-fill" style={{fontSize: '47px', paddingTop: '0px', marginTop: '11px', color: '#023c3f', borderColor: '#023c3f', paddingLeft: '0px', marginLeft: '1px'}}>
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                </svg></div>
              <div className="col-10 col-sm-7 col-md-5 col-lg-2 col-xl-2 col-xxl-3 col-auto w-auto justify-content-end" style={{paddingRight: '0px', paddingLeft: '1px'}}>
                <div id="position" className="w-auto d-flex flex-wrap" style={{paddingRight: '0px', marginRight: '0px'}}>
                  <div className="col-xl-12 w-auto col-auto" style={{paddingRight: '2px', marginRight: '10px'}}><span id="name" className="flex-fill d-flex w-auto w-auto" style={{paddingRight: '0px', marginRight: '2px', paddingLeft: '0px', height: 'auto', width: '94.9px', paddingBottom: '0px', marginBottom: '-1px', paddingTop: '7px', color: 'rgb(2,41,20)', fontSize: '21px', fontWeight: 'bold', textAlign: 'right', marginTop: '10px'}}>Nina Paraiso</span>
                    <div className="w-auto"><span id="down" className="d-inline-flex w-auto h-auto" style={{paddingBottom: '1px', marginBottom: '0px', paddingTop: '0px', marginTop: '-12px'}}>Manager</span></div>
                  </div>
                  <div className="dropdown show" style={{marginRight: '0px', paddingTop: '0px', paddingBottom: '11px'}}><a className="dropdown-toggle" aria-expanded="true" data-bs-toggle="dropdown" id="drop_Button" href="#" style={{paddingRight: '8px', marginLeft: '1px', marginRight: '6px', paddingBottom: '0px', marginBottom: '0px', paddingTop: '0px', marginTop: '2px'}} />
                    <div className="dropdown-menu show flex-wrap" data-bs-popper="none" id="dropdown"><a className="dropdown-item" href="#">Profile</a><a className="dropdown-item" href="#">Log out</a><a className="dropdown-item" id="another_acc" href="#">Log in to another account</a></div>
                  </div>
                </div>
              </div>
              <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1 col-auto w-auto" style={{paddingLeft: '0px', paddingRight: '1px', marginRight: '-1px'}}>
                {/* Start: Gravatar Image */}<img className="rounded-circle" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" width={70} height={68} />{/* End: Gravatar Image */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
}
 
export default Header;