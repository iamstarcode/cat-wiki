
import Head from "next/head";
import useSWR from "swr";
import { axios } from '../libs/axios'
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const TopTen = () => {

    const [recents, setRecents] = useState([])

    const { data, error } = useSWR('/api/search', () =>
        axios.get('/api/search')
            .then(res => res.data))

    const { data: mData, error: mError } = useSWR('/api/most-recent/10', () =>
        axios.get('/api/most-recent/10')
            .then(res => res.data))

    useEffect(() => {
        if (data && mData) {
            const recents = data.filter((item) => (mData.includes(item?.id)))
            setRecents(recents);
        }
    }, [data,mData])

    return (
        <>
            <div className="flex flex-col py-2">
                <Head>
                    <title>Top ten most searched</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <h2 className="text-i-primary text-4xl font-semibold mt-5">Top 10 most searched breeds</h2>
                <div className="flex flex-col mt-5">
                    {recents && recents.map((item, i) => (
                        <div className="flex flex-col md:flex-row md:flex-nowrap  md:space-x-4 mt-5" key={i}>
                            <div className=" md:w-3/12">
                                <Link href={"breed/" + item?.id}>
                                    <a>
                                        <Image
                                            className="object-cover object-center rounded-3xl cursor-pointer"
                                            src={item?.image.url}
                                            layout="responsive"
                                            height={250}
                                            width={250} />
                                    </a>
                                </Link>
                            </div>

                            <div className=" md:w-9/12">
                                <h2 className="text-i-primary text-4xl font-semibold">{i + 1}. {item.name}</h2>
                                <h2 className="text-i-primary text-lg font-medium mt-5">{item?.description}</h2>
                            </div>

                        </div>
                    ))}


                </div>
            </div>

        </>);
}

export default TopTen;