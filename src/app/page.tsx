//import React, { forwardRef, Fragment, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import Search from "@/components/Search"

/* import { MdArrowForward, MdClose } from "react-icons/md"
 */
import UseAutocomplete from "../components/UseAutocomplete"
import useViewportSize from "../hooks/useWindowResize"
import { axios } from "../libs/axios"

interface IHomeProps {
  breeds: []
}

const getBreeds = async () => {
  //https://api.thecatapi.com/v1/images/search?limit=10
  //https://api.thecatapi.com/v1/breeds

  const headers = new Headers({
    "x-api-key": process.env.NEXT_PUBLIC_API_KEY!,
    "Content-Type": "application/json",
  })

  const res = await fetch("https://api.thecatapi.com/v1/breeds", {
    method: "GET",
    headers,
    redirect: "follow",
  })

  const data = await res.text()

  const parsed = JSON.parse(data)

  return parsed
}
const Home = async () => {
  const breeds = await getBreeds()

  /*   const { width } = useViewportSize()
  const [bgImgSrc, setBgImgSRc] = useState({
    src: "/img/HeroImagesm.png",
    width: 768,
  }) */
  /*   const [isMobile, setIsMobile] = useState<true | false>()
  const [recents, setRecents] = useState<any[]>([]) */

  /*  useEffect(() => {
    if (width > 0 && width < 768) {
      setBgImgSRc({ src: "/img/HeroImagesm.png", width: 768 })
      setIsMobile(true)
    } else if (width < 1028) {
      setBgImgSRc({ src: "/img/HeroImagemd.png", width: 1024 })
      setIsMobile(false)
    } else {
      setBgImgSRc({ src: "/img/HeroImagelg.png", width: 1440 })
      setIsMobile(false)
    }
  }, [width]) */

  /*  let [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  } */

  /*   const { data, error } = useSWR("most-searched/4", () =>
    axios.get("/most-searched/4").then((res) => res.data)
  ) */

  function pickObjectById(arr: any[], imageArray: any[]) {
    const imageSet = new Set(imageArray)
    const pickedObject = arr.filter((obj: { id: unknown }) =>
      imageSet.has(obj.id)
    )
    return pickedObject || null // Return null if no match is found
  }

  async function fetchImageUrl(id: string) {
    const res = await fetch(`https://api.thecatapi.com/v1/images/${id}`)

    const data = await res.json()
    return data.url ?? ""
  }

  /*   useEffect(() => {
    const as = async () => {
      if (data) {
        const pickedObject = pickObjectById(breeds, data)

        for (let i = 0; i < pickedObject.length; i++) {
          const element = pickedObject[i]
          pickedObject[i]["url"] = await fetchImageUrl(
            element.reference_image_id
          )
        }
        setRecents(pickedObject)
      }
    }

    as()
  }, [data]) */

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <div className="flex w-full flex-col">
        <div
          className=" w-full flex-col bg-no-repeat bg-cover bg-center rounded-tl-[2.5rem] rounded-tr-[2.5rem]"
          style={{ backgroundImage: `url(/img/HeroImagelg.png)` }}
        >
          <div className="flex-col h-40 md:h-52  mt-3 px-8 py-4 md:mt-5 md:px-12 md:pb-28 md:text-2xl">
            <div className="z-10 w-[150px] md:w-[300px]">
              <Image
                alt="big logo"
                src={"/img/logo2.svg"}
                height={43}
                width={128}
              />

              <h2 className="text-white text-xs md:text-xl font-normal mb-2">
                Get to know more about your cat breed
              </h2>
              <Search breeds={breeds} />
              {/* isMobile */}
            </div>
          </div>
        </div>
        <div className="flex-col bg-[#E3E1DC] rounded-bl-[2.5rem] rounded-br-[2.5rem] pb-16 px-8 md:px-12 md:text-2xl">
          <div className="block">
            <h2 className="mt-4 font-medium text-sm text-i-primary">
              Most Searched Breeds
            </h2>
            <h2 className="w-16 h-1 bg-i-primary rounded-full mt-2"></h2>
          </div>
          <div className="md:flex justify-between justify-items-end items-baseline self-baseline">
            <h2 className="text-i-primary font-bold text-2xl max-w-xs md:max-w-lg md:text-5xl mt-5">
              66+ Breeds for you to discover
            </h2>
            <Link href="/top-ten">
              <h2 className="text-i-primary/50 inline-flex items-end text-xs md:text-sm font-extrabold">
                SEE MORE
                <span className=" ml-3"> {/*   <MdArrowForward /> */}</span>
              </h2>
            </Link>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-x-14 mt-8">
            {/*    {!data && !error && <h2>Loading</h2>}
            {recents &&
              recents.map((item: any, index: number) => (
                <div key={index} className="">
                  <Link href={"breed/" + item?.id}>
                    <Image
                      alt="image"
                      className="object-cover object-center rounded-2xl cursor-pointer"
                      src={item?.url}
                      layout="responsive"
                      height={150}
                      width={150}
                    />
                  </Link>
                  <h2 className="text-xs lg:text-lg mt-3 font-semibold text-i-primary">
                    {item?.title}
                  </h2>
                </div>
              ))} */}
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-3 md:mt-12">
          <div className="flex flex-col md:p-4 md:w-6/12">
            <h2 className="w-20 h-1 font-thin bg-i-primary rounded-full mt-12"></h2>
            <h2 className="text-i-primary text-[40px] font-bold mt-5">
              Why should you have a cat?
            </h2>
            <h2 className="text-lg mt-8 font-medium">
              Having a cat around you can actually trigger the release of
              calming chemicals in your body which lower your stress and anxiety
              leves{" "}
            </h2>
            <a
              target="_blank"
              href="https://www.mentalfloss.com/article/51154/10-scientific-benefits-being-cat-owner"
            >
              <h2 className="text-i-primary/50 inline-flex items-center text-xs font-extrabold mt-12">
                READ MORE <span className="ml-3">MdArrowForward</span>
              </h2>
            </a>
          </div>
          <div className="flex space-x-2 mt-8 md:mt-0 p-2 md:p-4 md:w-6/12">
            <div className="w-7/12">
              <div className=" rounded-3xl">
                <Image
                  alt="image2"
                  src="/img/image2.png"
                  height={294}
                  width={440}
                />
              </div>
              <div className="flex">
                <div className="w-5/12"> {/* Offset */} </div>
                <div className="w-7/12 mt-2 rounded-3xl">
                  <Image
                    alt="image"
                    src="/img/image1.png"
                    height={440}
                    width={294}
                  />
                </div>
              </div>
            </div>
            <div className="w-5/12">
              <div className="h-60 row-span-2 rounded-3xl">
                <Image
                  alt="image"
                  src="/img/image3.png"
                  height={580}
                  width={359}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* export async function getServerSideProps() {
  const data = await axios.get("/search").then((res) => res.data)

  const breeds = data?.map((item: any, index: number) => ({
    ["name"]: item.name,
    id: item.id,
    ["reference_image_id"]: item.reference_image_id
      ? item.reference_image_id
      : "",
  }))

  return {
    props: {
      breeds,
    },
  }
} */

export default Home
