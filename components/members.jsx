import React from 'react';
import {members} from "../data";

const Members = () => {
    return (
        <div className={"members-container container"}>
            <h2 className={"text-center hr"}>Our Members</h2>
            <br/>
            <div className={'center about-text'}>
                <p className="text-center  col-md-10 ">T-hands is managed by a group of active members from
                        <b> Team Thirikey</b>. We, as a team, work together to achieve our goals.
                For the time being, we are running with members of the closed group Thirikey. But anybody can volunteer our
                upcoming or ongoing events, with an acknowledgment from our organization.</p>
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
                        <tr>
                            <td colSpan={4}  className={'text-center'}><b>Committee Members</b></td>
                        </tr>
                        {members.slice(0,7).map((member, i) => {
                            return (
                                <tr>
                                    <th scope="row">{i + 1}</th>
                                    <td>{member.name}</td>
                                    <td>{member.designation}</td>
                                    <td>{member.phone}</td>
                                </tr>
                            )
                        })}
                        {/*<tr>*/}
                        {/*    <td colSpan={4}  className={'text-center'}><b>Volunteers</b></td>*/}
                        {/*</tr>*/}
                        {/*{members.slice(7).map((member, i) => {*/}
                        {/*    return (*/}
                        {/*        <tr>*/}
                        {/*            <th scope="row">{i + 8}</th>*/}
                        {/*            <td>{member.name}</td>*/}
                        {/*            <td>{member.designation}</td>*/}
                        {/*            <td>{member.phone}</td>*/}
                        {/*        </tr>*/}
                        {/*    )*/}
                        {/*})}*/}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Members;
