import React from 'react';
import {members} from "../data";

const Members = () => {
    return (
        <div className={"members-container container"}>
            <h2 className={"text-center hr"}>Our Members</h2>
            <br/>
            <div className={'center'}>
                <p className="text-center about-text col-md-10 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, culpa
                    deleniti dolor iusto pariatur quam rem sit vitae! Ab aperiam cupiditate praesentium recusandae. Debitis
                    ex itaque laboriosam magni qui, sint?</p>
            </div>
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
                        {members.map((member,i)=>{
                            return(
                                <tr>
                                    <th scope="row">{i+1}</th>
                                    <td>{member.name}</td>
                                    <td>{member.designation}</td>
                                    <td>{member.phone}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Members;
