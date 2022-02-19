
import Head from 'next/head'
import Image from 'next/image'
//Layout for all using the child
const DefaultLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Next Starter</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <div 
      className="antialiased flex flex-col bg-base text-foreground container mx-auto mt-0" 
      >
       
        <main className="p-4 lg:p-8 ">
        <div>
            <Image src='/img/logo.svg'
              height={43}
              width={124}
            />
          </div>
          {children}
        </main>
       
      </div>

      <style jsx global>
        {`
        html,body{
          font-family: 'Montserrat', sans-serif;
        } 
        `}
      </style>
    </>
  )
}

export default DefaultLayout
