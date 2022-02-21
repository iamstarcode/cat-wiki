import Head from 'next/head'

import React, { forwardRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { axios } from '../libs/axios'

import { MdClose, MdArrowForward } from 'react-icons/md'
import useSWR from 'swr'
import useViewportSize from '../hooks/useWindowResize'
import UseAutocomplete from '../components/UseAutocomplete'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Link from 'next/link'

interface IHomeProps {
  breeds: []

}
const Home = ({ breeds }: IHomeProps) => {

  const { width } = useViewportSize();
  const [bgImgSrc, setBgImgSRc] = useState({ src: "/img/HeroImagesm.png", width: 768 })
  const [isMobile, setIsMobile] = useState<true | false>()
  const [recents, setRecents] = useState([])

  useEffect(() => {

    if (width > 0 && width < 768) {
      setBgImgSRc({ src: '/img/HeroImagesm.png', width: 768 })
      setIsMobile(true)
    }
    else if (width < 1028) {
      setBgImgSRc({ src: '/img/HeroImagemd.png', width: 1024 })
      setIsMobile(false)
    }
    else {
      setBgImgSRc({ src: '/img/HeroImagelg.png', width: 1440 })
      setIsMobile(false)
    }
  }, [width])

  let [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }


  const { data, error } = useSWR('/api/most-recent', () =>
    axios.get('/api/most-recent/4')
      .then(res => res.data))

  useEffect(() => {
    if (data) {
      const recents = breeds.filter((item: any) => (data.includes(item.breed_id)))
      setRecents(recents);
    }
  }, [data])

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>Cat Wiki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-full flex-col">
        <div className=" w-full flex-col bg-no-repeat bg-cover bg-center rounded-tl-[2.5rem] rounded-tr-[2.5rem]"
          style={{ backgroundImage: `url(${bgImgSrc.src})` }}
        >
          <div className="flex-col text-white mt-3 px-8 py-4 md:mt-5 md:px-12 md:pb-28 md:text-2xl)">
            <div className="z-10 w-[150px] md:w-[300px]">

              {width < 768 &&
                <Image src={'/img/logom.svg'}
                  height={43}
                  width={128}
                />
              }
              {width >= 768 &&
                <Image src={'/img/logo2.svg'}
                  height={43}
                  width={128}
                />
              }
              <h2 className="text-white text-xs md:text-xl font-normal">  Get to know more about your cat breed</h2>

              {isMobile && <div className="relative w-max text-gray-600 mt-3 mb-3" >
                <input onClick={openModal} placeholder="Search" className="w-32 bg-white text-i-primary h-10 px-5 pr-10 rounded-full focus:border-i-primary focus:ring-i-primary" type="text" />
                <button type="submit" className="absolute inset-y-0 right-3">
                  <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" >
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                  </svg>
                </button>
              </div>}

              {isMobile && <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                  as="div"
                  className="fixed inset-0 z-10 overflow-y-auto"
                  onClose={closeModal}
                >
                  <div className="min-h-screen px-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Dialog.Overlay className="fixed inset-0 bg-slate-900/75" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                      className="inline-block h-screen align-middle"
                      aria-hidden="true"
                    >
                      &#8203;
                    </span>
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <div className="inline-block h-80 w-full max-w-md p-4 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">

                        <div className="mt-2 z-50">
                          <div className="flex justify-end my-3">
                            <button onClick={closeModal} className="px-3 py-3 bg-gray-200 rounded-lg">
                              <MdClose color="#291507" />
                            </button>
                          </div>

                          <div>
                            <UseAutocomplete options={breeds} />
                          </div>
                        </div>
                      </div>
                    </Transition.Child>
                  </div>
                </Dialog>
              </Transition>}
              {!isMobile && <UseAutocomplete options={breeds} />}

            </div>
          </div>

        </div>
        <div className="flex-col bg-[#E3E1DC] rounded-bl-[2.5rem] rounded-br-[2.5rem] pb-16 px-8 md:px-12 md:text-2xl">
          <div className="block">

            <h2 className="mt-4 font-medium text-sm text-i-primary">Most Searched Breeds</h2>
            <h2 className="w-16 h-1 bg-i-primary rounded-full mt-2"></h2>
          </div>
          <div className="md:flex justify-between justify-items-end items-baseline self-baseline">
            <h2 className="text-i-primary font-bold text-2xl max-w-xs md:max-w-lg md:text-5xl mt-5">66+ Breeds for you to discover</h2>
            <Link href="/top-ten">
              <a>
                <h2 className="text-i-primary/50 inline-flex items-end text-xs md:text-sm font-extrabold">SEE MORE<span className=" ml-3"> <MdArrowForward /></span></h2>
              </a>
            </Link>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-x-14 mt-8">
            {(!data && !error) && <h2>Loading</h2>}
            {recents && recents.map((item: any, index: number) => (
              <div key={index} className="">
                <Link href={"breed/" + item?.breed_id}>
                  <a>
                    <Image
                      className="object-cover object-center rounded-2xl cursor-pointer"
                      src={item?.image.url}
                      layout="responsive"
                      height={150}
                      width={150} />
                  </a>
                </Link>
                <h2 className="text-xs lg:text-lg mt-3 font-semibold text-i-primary">{item?.title}</h2>
              </div>
            ))}
          </div>

        </div>
        <div className="flex flex-col md:flex-row mt-3 md:mt-12">
          <div className="flex flex-col md:p-4 md:w-6/12">
            <h2 className="w-20 h-1 font-thin bg-i-primary rounded-full mt-12"></h2>
            <h2 className="text-i-primary text-[40px] font-bold mt-5">Why should you have a cat?</h2>
            <h2 className="text-lg mt-8 font-medium">
              Having a cat around you can actually trihher the release of calming chemicls in your body which lower your stress and anxiety levels
            </h2>
            <a target="_blank" href="https://www.mentalfloss.com/article/51154/10-scientific-benefits-being-cat-owner">
              <h2 className="text-i-primary/50 inline-flex items-center text-xs font-extrabold mt-12">
                READ MORE <span className="ml-3">{<MdArrowForward />}</span>
                </h2>
            </a>
          </div>
          <div className="flex space-x-2 mt-8 md:mt-0 p-2 md:p-4 md:w-6/12">
            <div className="w-7/12">
              <div className=" rounded-3xl">
                <Image
                  src='/img/image2.png'
                  height={294}
                  width={440} />
              </div>
              <div className="flex">
                <div className="w-5/12"> {/* Offset */} </div>
                <div className="w-7/12 mt-2 rounded-3xl">
                  <Image
                    src='/img/image1.png'
                    height={440}
                    width={294} />
                </div>
              </div>
            </div>
            <div className="w-5/12">
              <div className="h-60 row-span-2 rounded-3xl">
                <Image
                  src='/img/image3.png'
                  height={580}
                  width={359} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export async function getServerSideProps() {

  //const data = await axios.get('https://api.thecatapi.com/v1/breeds').then(res => res.data)
  const data = await axios.get('/api/search').then(res => res.data)
  const breeds = data?.map((item: any, index: number) => ({
    ['title']: item.name,
    ['breed_id']: item.id,
    ['image']: item.image ? item.image : ""
  }))

  /* const breeds = [
    { title: 'The Shawshank Redemption', breed_id: 1994 },
    { title: 'The Godfather', breed_id: 1972 },
    { title: 'The Godfather: Part II', breed_id: 1974 },
    { title: 'The Dark Knight', breed_id: 2008 },
    { title: '12 Angry Men', breed_id: 1957 },
    { title: "Schindler's List", breed_id: 1993 },
    { title: 'Pulp Fiction', breed_id: 1994 },
  ] */

  return {
    props: {
      breeds,
      //data
    }
  }
}

export default Home

