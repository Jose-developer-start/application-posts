import React,{useEffect,useState} from "react";
import { Link,useParams } from "react-router-dom";
import AppContainer from "../AppContainer";
export default function Home() {
    const [posts, setPosts] = useState([])
    let { id } = useParams();


    const fetchPost = async ()=>{
        const BASE_API_URL = "http://localhost:8000/api/posts";
        const postsFetch = await fetch(BASE_API_URL,{
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        const postJson = await postsFetch.json();
        //console.log(postJson.data);
        setPosts(postJson.data);
    }
    useEffect(()=>{
        fetchPost();
    },[])
    const deletePost = (id)=>{
        const BASE_API_URL = "http://localhost:8000/api/posts/" + id;
    
        const fetchLocation = async ()=>{
            const postsFetch = await fetch(BASE_API_URL,{
                "method": "DELETE",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            })
            const postJson = await postsFetch.json();
            console.log(postJson.data);
            
        }   
        fetchLocation();
        fetchPost();
   
    }
    if(!posts.length){ 
        return (
            <div>Cargando...</div>
    )}
    return (
        <AppContainer
            title="Laravel react js"
        >
            <div className="container">
            <div className="card">
                <div className="card-header">lARAVEL  React js </div>
                <div className="card-body">
                    <Link to={"/add"} className="btn btn-primary">Add</Link>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map(post => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.description}</td>
                                <td>
                                    <Link to={"/edit/" + post.id} className="btn btn-warning">EDIT</Link>
                                    <button onClick={()=>{deletePost(post.id)}} type="button" className="btn btn-danger">DELETE</button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </AppContainer>
    );
}
