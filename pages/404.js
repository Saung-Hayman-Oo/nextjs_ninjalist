import Link from "next/link";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Ooooops...</h1>
            <p>That page cannot found</p>
            <p>
                Go back home page 
                <Link href="/">
                    <a>Home</a>
                </Link>
            </p>
        </div>
     );
}
 
export default NotFound;