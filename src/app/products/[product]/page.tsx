import Link from "next/link"



export default async function Product({
  params,
}:{
  params:{product:string};
})
{
 

  const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.product}`);
  const res = await fetchData.json()
  console.log(res)
return(
<>

<h3>Identification</h3>
 <p>{res.id}</p>
 <h3>Title</h3>
 <p>{res.title}</p>
 <h3>Body</h3>
 <p>{res.body}</p>




</>




)





}

