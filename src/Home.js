import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./use/useFetch";

const Home = () => {
    const { data, isPending, Error} = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home">
            {Error && <div>{Error}</div>}
            {isPending && <div> Pending ... </div>}
            {data && <BlogList blogs={data} title="All Blogs!"/>}
        </div>
     );
}
 
export default Home;