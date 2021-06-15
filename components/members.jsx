import React from 'react';
import {members} from "../data";
import {useQuery} from "@apollo/client";
import {GET_ALL_MEMBERS} from "../queries/members.query";

const Members = () => {
    const { loading, error, data } = useQuery(GET_ALL_MEMBERS);

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
                            <th scope="col">Membership id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Designation</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td colSpan={4}  className={'text-center'}><b>Committee Members</b></td>
                        </tr>
                        {data?.members.filter(i=>i.committeeMember).map((member, i) => {
                            return (
                                <tr>
                                    <th scope="row">{member.membershipId}</th>
                                    <td>{member.name}</td>
                                    <td>{member.role}</td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td colSpan={4}  className={'text-center'}><b>Volunteers</b></td>
                        </tr>
                        {data?.members.filter(i=>!i.committeeMember).map((member, i) => {
                            return (
                                <tr>
                                    <th scope="row">{member.membershipId}</th>
                                    <td>{member.name}</td>
                                    <td>{member.role}</td>
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
