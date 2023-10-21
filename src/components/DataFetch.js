import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css"

function DataFetch(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get('https://dummyjson.com/users').then(res => setData(res.data.users)).catch(err => console.log(err))
    }, [])
    return <div className="container">
        <div className="mt-3">
            <h3>Dummy Data</h3>
            <table>
                <thead>
                <tr>
                    <th>Sno</th>
                    <th>Profile Pic</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>E-mail</th>
                    <th>Username</th>
                    <th>Domain</th>
                    <th>IP</th>
                    <th>University</th>
                </tr></thead>
                <tbody>
                    {
                        data.map((user, index)=> {
                            return <tr key={index}>
                                <td>{user.id}</td>
                                <td><img className="pfpimg" src={user.image} alt=""></img></td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.gender}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>{user.domain}</td>
                                <td>{user.ip}</td>
                                <td>{user.university}</td>

                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
}

export default DataFetch;