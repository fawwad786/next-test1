import Link from "next/link";

export default function Nav(){
return(
<div>
    <ul>
        <li>
        <Link href="/">Home</Link>

        </li>
        <li>
        <Link href="/about">About</Link>   

        </li>

        <li>

        <Link href="/products">Product</Link>

        </li>


    </ul>



</div>

)



}

