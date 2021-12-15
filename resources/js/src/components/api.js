
const BASE_API_URL = "http://localhost:8000/api/posts";

export default fetchLocation = async ()=>{
    await fetch(BASE_API_URL,{
        "method": "GET",
        "mode" : "cors",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
    .then((res)=> res.json())
    .then((data) =>{
        setUsers(data);
        //console.log(data);
    });
}   
fetchLocation();