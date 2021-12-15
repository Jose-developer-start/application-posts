import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AppContainer from "../AppContainer";

export default function Edit() {
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const { id } = useParams()
    
    const BASE_API_URL = "http://localhost:8000/api/posts/" + id + "/edit";
    const fetchPost = async ()=>{
        const result = await fetch(BASE_API_URL,{
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });
        const postJson = await result.json();
        setTitle(postJson.data.title);
        setDescription(postJson.data.description);
    }
    useEffect(()=>{
        fetchPost();
    },[]);


    const onSubmit = (e)=>{
        e.preventDefault();
        const BASE_API_URL = "http://localhost:8000/api/posts/" + id;
        let data = {
            'title' : title,
            'description': description
        };
        const fetchLocation = async ()=>{
            const postsFetch = await fetch(BASE_API_URL,{
                "method": "PUT",
                "body": JSON.stringify(data),
                "headers": {
                    "Accept": "application/json",
                    'Content-Type': 'application/json'
                }
            })
            const postJson = await postsFetch.json();
            console.log(postJson);
        }   
        fetchLocation();
    }

    return (
        <AppContainer title="Edit POST">
            <form method="POST" onSubmit={onSubmit}>
                <div className="form-group">
                    <label>
                        Title
                        </label>
                        <input value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" type="text"></input>
                        
                </div>
                <div className="form-group">
                    <label>
                        Description
                        </label>
                        <textarea value={description} className="form-control" onChange={(e)=>{setDescription(e.target.value)}} type="text"></textarea>
                        
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-success">Edit</button>
                </div>
            </form>
            <Link className="btn btn-secondary" to={"/"}>Regresar</Link>
        </AppContainer>
    );
}
