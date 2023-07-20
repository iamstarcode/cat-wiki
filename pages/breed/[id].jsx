import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { axios } from '../../libs/axios'
import * as alia from 'axios'
import Axios from 'axios'
import Image from 'next/image'

const Id = () => {
  const id = useRouter().query.id
  const [imageId, setImageId] = useState('')

  /*  const { data, error } = useSWR(`/breed/${id}`, () =>
    axios.get(`/breed/${id}`).then((res) => res.data)
  ) */

  //const data = await axios.get('/search').then(res => res.data)

  const { data, error } = useSWR(`/breed/${id}`, () =>
    axios.get('/search').then((res) => {
      const breed = res.data.find((obj) => obj.id === id)
      return breed
    })
  )

  const { data: images, error: errorImages } = useSWR(
    `images-by-breed/${id}`,
    () => axios.get(`/images/${id}`).then((res) => res.data)
  )

  useEffect(() => {
    if (data !== undefined) {
      setImageId(data.reference_image_id)
    }
  }, [data])

  function creatRating(x) {
    const size = 5
    const jsx = []
    for (let i = 0; i < size; i++) {
      if (i < x) {
        jsx.push(
          <h2 key={i} className="h-3 w-16 rounded-full bg-i-primary"></h2>
        )
      } else {
        jsx.push(
          <h2 key={i} className="h-3 w-16 rounded-full bg-[#E0E0E0]"></h2>
        )
      }
    }
    return jsx
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center py-2">
        <Head>
          <title>Breed</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="flex w-full flex-col">
          <div className="flex flex-wrap">
            <div className="w-full p-5 md:w-2/6">
              {imageId && (
                <Image
                  className="rounded-2xl object-cover object-center"
                  src={`https://cdn2.thecatapi.com/images/${imageId}.jpg`}
                  height={270}
                  width={270}
                />
              )}
            </div>
            <div className="w-full flex-col md:w-4/6 md:p-5">
              {data && (
                <>
                  <h2 className="text-4xl font-semibold text-i-primary">
                    {data.name}
                  </h2>
                  <h2 className="mt-5 text-lg font-medium text-i-primary">
                    {data.description}
                  </h2>
                  <h2 className="mt-5 text-lg font-medium text-i-primary">
                    <span className=" font-bold">Temprament: </span>
                    {data.temperament}
                  </h2>
                  <h2 className="mt-5 text-lg font-medium text-i-primary">
                    <span className=" font-bold">Origin: </span>
                    {data.origin}
                  </h2>
                  <h2 className="mt-5 text-lg font-medium text-i-primary">
                    <span className=" font-bold">Life Span: </span>
                    {data.life_span} years
                  </h2>
                  <div className="mt-5 flex w-full flex-wrap items-center justify-between md:w-9/12">
                    <h2 className=" text-lg font-semibold text-i-primary">
                      Adaptability:
                    </h2>
                    <div className="grid grid-cols-5 gap-4">
                      {creatRating(data.adaptability)}
                    </div>
                  </div>
                  <div className="mt-5 flex w-full flex-wrap items-center justify-between md:w-9/12">
                    <h2 className=" text-lg font-semibold text-i-primary">
                      Affection level:
                    </h2>
                    <div className="grid grid-cols-5 gap-4">
                      {creatRating(data.affection_level)}
                    </div>
                  </div>
                  <div className="mt-5 flex w-full flex-wrap items-center justify-between md:w-9/12">
                    <h2 className=" text-lg font-semibold text-i-primary">
                      Child freiendly:
                    </h2>
                    <div className="grid grid-cols-5 gap-4">
                      {creatRating(data.child_friendly)}
                    </div>
                  </div>
                  <div className="mt-5 flex w-full flex-wrap items-center justify-between md:w-9/12">
                    <h2 className=" text-lg font-semibold text-i-primary">
                      Grooming:
                    </h2>
                    <div className="grid grid-cols-5 gap-4">
                      {creatRating(data.grooming)}
                    </div>
                  </div>
                  <div className="mt-5 flex w-full flex-wrap items-center justify-between md:w-9/12">
                    <h2 className=" text-lg font-semibold text-i-primary">
                      Intelligence:
                    </h2>
                    <div className="grid grid-cols-5 gap-4">
                      {creatRating(data.intelligence)}
                    </div>
                  </div>
                  <div className="mt-5 flex w-full flex-wrap items-center justify-between md:w-9/12">
                    <h2 className=" text-lg font-semibold text-i-primary">
                      Health issues:
                    </h2>
                    <div className="grid grid-cols-5 gap-4">
                      {creatRating(data.health_issues)}
                    </div>
                  </div>
                  <div className="mt-5 flex w-full flex-wrap items-center justify-between md:w-9/12">
                    <h2 className=" text-lg font-semibold text-i-primary">
                      Social needs:
                    </h2>
                    <div className="grid grid-cols-5 gap-4">
                      {creatRating(data.social_needs)}
                    </div>
                  </div>
                  <div className="mt-5 flex w-full flex-wrap items-center justify-between md:w-9/12">
                    <h2 className=" text-lg font-semibold text-i-primary">
                      Stranger friendly:
                    </h2>
                    <div className="grid grid-cols-5 gap-4">
                      {creatRating(data.stranger_friendly)}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          {images && (
            <div className="s mt-5">
              <h2 className="text-4xl font-semibold text-i-primary">
                Other photos
              </h2>

              <div className="mt-5 grid grid-cols-2 gap-14 md:grid-cols-4">
                {images.map((image, x) => (
                  <Image
                    className="rounded-3xl bg-cover bg-center"
                    key={x}
                    src={image.url}
                    height={200}
                    width={200}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Id
