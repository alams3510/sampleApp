import React from "react";

function Teams() {

  const Mockdata=[
    {title:"App Development",
  desc:"web developer Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, assumenda!"},
  {title:"Web Development",
  desc:"web developer Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, assumenda!"},
  {title:"DevOps",
  desc:"web developer Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, assumenda!"},
  
  ]
  return (
    <div className="container">
      <h1 className="text-center mt-5">
        Our <span className="text-primary">Team</span>
      </h1>
      <hr className="w-25 m-auto mb-4" />
      <div className="row mb-3">

        {
          Mockdata.map((item,i)=>{
            return <div className="col-sm-6 col-md-4 p-5">
            <div className="card h-100 p-2 text-center">
              <img src="images/pp1.jpg" className="card-img-top rounded-circle border border-primary p-2" alt="..." />
              <div classNameName="card-body ">
                <h5 className="card-title mt-3">{item.title}</h5>
                <p className="card-text">
                  {item.desc}
                </p>
                <button className="btn btn-primary text-white">go some where</button>
              </div>
            </div>
          </div>
          })
        }
      </div>
    </div>
  );
}

export default Teams;
