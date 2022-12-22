import React from 'react'



function Services() {
  const Mockdata=[
    {title:"special title treatment",
      desc:"With supporting text below as a natural lead-in to additional content.",
      icon:"fa-brands fa-slack"
        },
        {title:"special title treatment",
      desc:"With supporting text below as a natural lead-in to additional content.",
      icon:"fa fa-address-book-o"
        },
        
        {title:"special title treatment",
        desc:"With supporting text below as a natural lead-in to additional content.",
        icon:"fa fa-snowflake-o"
          },
          {title:"special title treatment",
          desc:"With supporting text below as a natural lead-in to additional content.",
          icon:"fa fa-user-circle"
            },
            {title:"special title treatment",
            desc:"With supporting text below as a natural lead-in to additional content.",
            icon:"fa fa-meetup"
              },
              {title:"special title treatment",
              desc:"With supporting text below as a natural lead-in to additional content.",
             icon: "fa fa-handshake-o"
                },
  ]
  return (
    <div className='container'>      
        <h1 className='text-center my-2'>Our <span className='text-primary'>Services</span></h1>
        <hr className='w-25 m-auto mb-4'/>
        
  <div class="row">
  {
    Mockdata.map((item,i)=>{
      return <div class="col-sm-12 col-md-6 col-lg-4 p-3" key={i}>
      <div class="card">
        <div class="card-body">
        <i className={item.icon}></i>
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.desc}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    })
  }
  
</div>
</div>
  )
}

export default Services