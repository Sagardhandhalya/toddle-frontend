import React from 'react'


 export default function Header(){
    return(
<div>
         <h2 className="title"> MATHEMATICS <hr /></h2>
      
      <div className="head-thead" >

        <div className="head-action">

          <p><b>Actions</b></p>
          <p className="head-descreption">Move,Indent,<br/>Outdent,Delete</p>

        </div>

        <div className="head-standard">

          <p><b>Standard</b></p>

          <p className="head-descreption">The text of the standard</p>

        </div>

      </div>
      <hr/>
      </div>

    );

}