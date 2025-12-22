import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github(){
    const data = useLoaderData()
    // const [data, setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json)
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
            
    //     })
    // },[])
    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
          Github followers: {data.followers}
          <img src="https://cdn.pixabay.com/photo/2025/10/06/08/26/hot-air-balloon-9876494_1280.jpg" alt="Git Picture" width={300}/>
        </div>
    )
}

export default Github
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json();
}