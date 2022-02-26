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

    const { data, error } = useSWR(`/api/breed/${id}`, () =>
        axios.get(`/api/breed/${id}`).then((res) => res.data)
    )

    const { data: images, error: errorImages } = useSWR(`/api/images-by-breed/${id}`, () =>
        axios.get(`/api/images-by-breed/${id}`).then((res) => res.data)
    )

    useEffect(() => {
        if (data !== undefined) {
            setImageId(data[0]?.reference_image_id)
        }
    }, [data])
  
    function creatRating(x) {
        const size = 5
        const jsx = []
        for (let i = 0; i < size; i++) {
            if (i < x) {
                jsx.push(<h2 key={i} className="w-16 h-3 bg-i-primary rounded-full"></h2>)
            }
            else {
                jsx.push(<h2 key={i} className="w-16 h-3 bg-[#E0E0E0] rounded-full"></h2>)
            }

        }
        return jsx;
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
                        <div className="w-full md:w-2/6 p-5">
                            {imageId && (
                                <Image
                                    className="object-cover object-center rounded-2xl"
                                    src={`https://cdn2.thecatapi.com/images/${imageId}.jpg`}
                                    height={270}
                                    width={270}
                                />
                            )}
                        </div>
                        <div className="w-full md:w-4/6 md:p-5 flex-col">
                            {data && (
                                <>
                                    <h2 className="text-i-primary text-4xl font-semibold">
                                        {data[0]?.name}
                                    </h2>
                                    <h2 className="text-i-primary text-lg font-medium mt-5">
                                        {data[0]?.description}
                                    </h2>
                                    <h2 className="text-i-primary text-lg font-medium mt-5">
                                        <span className=" font-bold">Temprament: </span>
                                        {data[0]?.temperament}
                                    </h2>
                                    <h2 className="text-i-primary text-lg font-medium mt-5">
                                        <span className=" font-bold">Origin: </span>
                                        {data[0]?.origin}
                                    </h2>
                                    <h2 className="text-i-primary text-lg font-medium mt-5">
                                        <span className=" font-bold">Life Span: </span>
                                        {data[0]?.life_span} years
                                    </h2>
                                    <div className="flex flex-wrap items-center justify-between mt-5 w-full md:w-9/12">
                                        <h2 className=" text-i-primary text-lg font-semibold">
                                            Adaptability:
                                        </h2>
                                        <div className="grid grid-cols-5 gap-4">
                                            {creatRating(data[0]?.adaptability)}
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap items-center justify-between mt-5 w-full md:w-9/12">
                                        <h2 className=" text-i-primary text-lg font-semibold">
                                            Affection level:
                                        </h2>
                                        <div className="grid grid-cols-5 gap-4">
                                            {creatRating(data[0]?.affection_level)}
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap items-center justify-between mt-5 w-full md:w-9/12">
                                        <h2 className=" text-i-primary text-lg font-semibold">
                                            Child freiendly:
                                        </h2>
                                        <div className="grid grid-cols-5 gap-4">
                                            {creatRating(data[0]?.child_friendly)}
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap items-center justify-between mt-5 w-full md:w-9/12">
                                        <h2 className=" text-i-primary text-lg font-semibold">
                                            Grooming:
                                        </h2>
                                        <div className="grid grid-cols-5 gap-4">
                                            {creatRating(data[0]?.grooming)}
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap items-center justify-between mt-5 w-full md:w-9/12">
                                        <h2 className=" text-i-primary text-lg font-semibold">
                                            Intelligence:
                                        </h2>
                                        <div className="grid grid-cols-5 gap-4">
                                            {creatRating(data[0]?.intelligence)}
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap items-center justify-between mt-5 w-full md:w-9/12">
                                        <h2 className=" text-i-primary text-lg font-semibold">
                                            Health issues:
                                        </h2>
                                        <div className="grid grid-cols-5 gap-4">
                                            {creatRating(data[0]?.health_issues)}
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap items-center justify-between mt-5 w-full md:w-9/12">
                                        <h2 className=" text-i-primary text-lg font-semibold">
                                            Social needs:
                                        </h2>
                                        <div className="grid grid-cols-5 gap-4">
                                            {creatRating(data[0]?.social_needs)}
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap items-center justify-between mt-5 w-full md:w-9/12">
                                        <h2 className=" text-i-primary text-lg font-semibold">
                                            Stranger friendly:
                                        </h2>
                                        <div className="grid grid-cols-5 gap-4">
                                            {creatRating(data[0]?.stranger_friendly)}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    {images && 
                    <div className="s mt-5">
                        <h2 className="text-i-primary text-4xl font-semibold">
                           Other photos
                        </h2>

                        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-14">
                            {images.map((image,x)=>(
                                <Image
                                className="rounded-3xl bg-cover bg-center"
                                key={x}
                                src={image.url}
                                height={200}
                                width={200}
                                />
                            ))}
                        </div>
                    </div>}

                </div>
            </div>
        </>
    )
}

export default Id
