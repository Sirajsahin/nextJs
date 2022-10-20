import Head from "next/head"
import Homepage from "../component/webpage/Home/index"

const Home=()=> {
    return (
      <> 
      <Head>
        <title>Blog</title>
        <script type="application/ld+json">
        <h1>dhjbj</h1>  
       </script>
      
      </Head>
      <Homepage />
       <h1>I am at Blog page</h1>
      </>
    )
  }

 export default Home