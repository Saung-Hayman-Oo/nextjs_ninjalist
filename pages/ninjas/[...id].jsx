export default function Details({data}) {
    console.log(data)
    return <div>
      {/* <pre> {JSON.stringify(data,null,2)} </pre> */}
      <h1>{ data.name }</h1>
      <p>{ data.email }</p>
      <p>{ data.address.city }</p>
    </div>
  }
  
  

  export async function getServerSideProps(context) {
    const {id} =  context.query
    const data = await (await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)).json()
    return {
      props: {
          data:data
      }, // will be passed to the page component as props
    }
  } 