import "@/styles/globals.css"

import Image from "next/image"
import Link from "next/link"

interface RootLayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <div className="container mx-auto mt-0 flex flex-col bg-base text-foreground antialiased">
        <main className="px-4 pt-4 pb-0 lg:px-8 lg:pt-8 lg:pb-0  ">
          <div>
            <Link href={"/"}>
              <Image alt="icon" src="/img/logo.svg" height={43} width={124} />
            </Link>
          </div>
          {children}

          <footer className="mt-5 flex flex-col items-start rounded-tl-[2.5rem] rounded-tr-[2.5rem] bg-black py-8 px-6 md:h-24 md:flex-row md:justify-between">
            <Link href={"/"}>
              <Image alt="logo" src="/img/logo2.svg" height="32" width="105" />
            </Link>

            <div className="inline-flex items-center">
              <h2 className="mt-2 mr-2 text-white md:mt-0">
                cretad by starcode{" "}
              </h2>{" "}
              <svg
                width="32"
                height="32"
                viewBox="0 0 54 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30.6821 9.04026L19.9224 45.0539L23.4005 45.1741L34.1603 9.16889L30.6821 9.04026Z"
                  fill="#3E0EEB"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M35.0418 11.1861L39.5741 13.8068L44.1064 16.4191L39.5741 19.0397L35.0418 21.652V11.1861Z"
                  fill="#FE2D04"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M35.0418 21.6677L44.0991 16.4191L44.1064 21.652V26.8923L35.0418 21.6677Z"
                  fill="#FF6738"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M44.1064 26.8923L44.1148 21.652V16.4191L53.172 21.6593L44.1064 26.8923Z"
                  fill="#FE0000"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M44.1064 26.8923L53.1647 21.6447L53.1793 32.1106L48.6471 29.4983L44.1064 26.8923Z"
                  fill="#C10100"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M44.1064 26.8923L48.6397 29.5056L53.172 32.1252L44.1064 37.3582V26.8923Z"
                  fill="#FE0000"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M35.0492 32.1336L44.1064 26.8923L44.1221 37.3582L35.0492 32.1336Z"
                  fill="#BC0078"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M35.0492 32.1336L39.5814 34.7459L44.1148 37.3665L35.0492 42.5995V32.1336Z"
                  fill="#4E0096"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M44.1148 16.4191L44.0991 5.9532L53.172 11.1788L44.1148 16.4191Z"
                  fill="#FF6738"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M44.1148 5.96889L53.172 0.720262L53.1877 11.1861L44.1148 5.96889Z"
                  fill="#FFCE34"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.5367 11.48L9.46379 16.7056L18.5221 21.9459L18.5367 11.48Z"
                  fill="#FE2D04"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.5221 21.9459L9.46379 16.7056L9.45647 21.9386V27.1715L18.5221 21.9459Z"
                  fill="#FF6738"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.45647 27.1715V21.9386L9.46379 16.7056L0.39085 21.9312L9.45647 27.1715Z"
                  fill="#FE0000"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.45647 27.1715L0.39085 21.9312V27.1642L0.38353 32.3971L9.45647 27.1715Z"
                  fill="#C10100"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.5064 32.4191L13.9814 29.7911L9.45647 27.1715L9.44915 32.4044L9.43347 37.6374L18.5064 32.4191Z"
                  fill="#BC0078"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.5064 32.4191L13.9741 35.0324L9.43347 37.6374L18.4918 42.885L18.5064 32.4191Z"
                  fill="#4E0096"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.43347 37.6374L9.44915 32.4118L9.45647 27.1715L0.38353 32.3888L9.43347 37.6374Z"
                  fill="#FE0000"
                />
              </svg>
            </div>
          </footer>
        </main>
      </div>
    </>
  )
}

export default Layout
