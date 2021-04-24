import React from 'react';

const Members = () => {
    return (
        <div className={"members-container container"}>
            <h2 className={"text-center"}>Our Members</h2>

           <div className="row table-row">
               <div className="col-md-10">
                   <table className="table table-bordered table-hover table-striped">
                       <thead>
                       <tr>
                           <th scope="col">id</th>
                           <th scope="col">Name</th>
                           <th scope="col">Designation</th>
                           <th scope="col">Contact</th>
                       </tr>
                       </thead>
                       <tbody>
                       <tr>
                           <th scope="row">1</th>
                           <td>Mark</td>
                           <td>Otto</td>
                           <td>@mdo</td>
                       </tr>
                       <tr>
                           <th scope="row">2</th>
                           <td>Jacob</td>
                           <td>Thornton</td>
                           <td>@fat</td>
                       </tr>
                       <tr>
                           <th scope="row">3</th>
                           <td>Larry</td>
                           <td>the Bird</td>
                           <td>@twitter</td>
                       </tr>
                       </tbody>
                   </table>
               </div>

           </div>
        </div>
    );
};

export default Members;
