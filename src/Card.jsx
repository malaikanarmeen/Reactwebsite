import React from 'react';
import {NavLink} from 'react-router-dom';


const Card = (props) => {
  return (
    <>
    
                <div className='col-md-4 col-10 mx-auto'>
                <div class="card" >
  <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc} width="200" height='200'/>
  <div class="card-body">
    <h5 class="card-title font-weight-bold" >{props.title}</h5>
    <p class="card-text">Are you ready to take your personal and professional life to the next level.</p>
    <NavLink to="" class="btn btn-primary">view details</NavLink>
  </div>
</div>
    </div>
      
  
      
            
    </>
  );
};

export default Card;
