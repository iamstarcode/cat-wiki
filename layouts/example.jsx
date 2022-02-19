
import Head from 'next/head'

//Layout for all using the child
const Example = ({ children }) => {
  return (
    <>
      <Head>
        <title>Next Example</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@200;400&display=swap" rel="stylesheet"/>
      </Head>
      <div 
      className="antialiased flex flex-col bg-base text-foreground container mx-auto mt-0" 
      >
       
        <main className="p-4 lg:p-8 flex ">
            <h2 className="text-7xl">ygufvytjh</h2>
          {children}
        </main>
       
      </div>

      <style jsx global>
        {`
        html,body{
          font-family: 'Kumbh Sans', sans-serif;
        } 
        `}
      </style>
    </>
  )
}

export default Example