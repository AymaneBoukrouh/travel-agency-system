import { Outlet } from 'react-router-dom';

const Auth = () => {
  return (
    <div className="container-fluid h-100" style={{ backgroundColor: '#222f42' }}>
      <div className="row h-100">
        <div className="col-6" style={{ backgroundColor: '#5ed0c1' }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <img className="img-fluid w-75" src="/airlines.svg" alt="logo" />
          </div>
        </div>
        <div className="col-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Auth;
