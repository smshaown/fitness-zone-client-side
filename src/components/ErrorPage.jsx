
import { Helmet } from "react-helmet-async";
import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const { error } = useRouteError();
  return (
    <div>
      <Helmet>
        <title>Fitness zone | ErrorPage</title>
      </Helmet>

      <div className='container mx-auto text-center mt-4 '>
            <img src="https://i.ibb.co/GVCH2PT/6549647-404-landingpage-kostenlos-vektor.jpg"   alt="" className='mt-5  h-[300px] img-fulid pl-60 mb-5' />
            <h3 className='fw-bold'> {error.message}</h3>
               
            <h3 className=''>Not Found This Page</h3>

            <button className="btn btn-success fw-bold mt-5"><Link className="text-decoration-none text-white" to="/">Back to homepage</Link></button>  
          
        </div>
    </div>
  );
};

export default ErrorPage;
