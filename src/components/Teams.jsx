import React from "react";

function Teams() {
  return (
    <div className="container">
      <h1 className="text-center mt-5">
        Our <span className="text-primary">Team</span>
      </h1>
      <hr className="w-25 m-auto mb-4" />
      <div className="row mb-3">
        <div className="col-sm-6 col-md-4 p-5">
          <div className="card h-100 p-2 text-center">
            <img src="images/pp1.jpg" className="card-img-top rounded-circle border border-primary p-2" alt="..." />
            <div classNameName="card-body ">
              <h5 className="card-title mt-3">App Development</h5>
              <p className="card-text">
                web developer Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, assumenda!
              </p>
              <button className="btn btn-primary text-white">go some where</button>
            </div>
          </div>
        </div>
    
          <div className="col-sm-6 col-md-4 p-5">
            <div className="card h-100 p-3 text-center">
              <img src="images/pp1.jpg" className="card-img-top rounded-circle border border-primary p-2" alt="..." />
              <div classNameName="card-body">
                <h5 className="card-title mt-3">Web Development</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  
                </p>
                <button className="btn btn-primary text-white">go some where</button>

              </div>
            </div>
          </div>
        
         
          <div className="col-sm-6 col-md-4 mt-md-0 mt-sm-2 p-5">
            <div className="card h-100 p-3 text-center">
              <img src="images/pp1.jpg" className="card-img-top rounded-circle border border-primary p-2" alt="..." />
              <div classNameName="card-body ">
                <h5 className="card-title mt-3">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <button className="btn btn-primary text-white">go some where</button>

              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Teams;
