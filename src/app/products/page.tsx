import Link from "next/link";
import Nav from "../../../components/nav";

export default async function Products(){

  const fetchData = await fetch('https://jsonplaceholder.typicode.com/posts')
  const res = await fetchData.json()
  
return(
<>

<h3>Product List</h3>
<ol>

{

    res.map((item:any,i:number)=>{
        return(

          <li>
              <Link href={`/products/${item.id}`}>{item.title} </Link>
              </li>  
      
        )


    })




}

</ol>



</>


 


)




   
}

