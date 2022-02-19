import Head from "next/head";
import { useRouter } from "next/router";

const Breed = () => {

    const router = useRouter();
    console.log(router.query)
    return ( <>
    
    <div className="flex flex-col items-center justify-center py-2">
    <Head>
        <title>Breed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex w-full flex-col">
          <div className="flex w-full" >
              <div className="w-2/5">rfrfr</div>
              <div className="w-/3/5">rfrf</div>
          </div>
      </div>
    </div>
    </> );
}
 
export default Breed;