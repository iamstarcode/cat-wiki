import Head from 'next/head'
import useSWR from 'swr'
import { axios } from '../libs/axios'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const TopTen = () => {
  const [recents, setRecents] = useState([])

  const { data, error } = useSWR('/search', () =>
    axios.get('/search').then((res) => res.data)
  )

  const { data: mData, error: mError } = useSWR('/most-recent/10', () =>
    axios.get('/most-searched/10').then((res) => res.data)
  )

  async function fetchImageUrl(id) {
    const res = await fetch(`https://api.thecatapi.com/v1/images/${id}`)

    const data = await res.json()
    return data.url ?? ''
  }

  useEffect(() => {
    const as = async (recents) => {
      for (let i = 0; i < recents.length; i++) {
        const element = recents[i]
        recents[i]['url'] = await fetchImageUrl(element.reference_image_id)
      }
      setRecents(recents)
    }

    let recents
    if (data && mData) {
      const recents = data.filter((item) => mData.includes(item?.id))
      as(recents)
    }
  }, [data, mData])

  return (
    <>
      <div className="flex flex-col py-2">
        <Head>
          <title>Top ten most searched</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h2 className="mt-5 text-4xl font-semibold text-i-primary">
          Top 10 most searched breeds
        </h2>
        <div className="mt-5 flex flex-col">
          {recents &&
            recents.map((item, i) => (
              <div
                className="mt-5 flex flex-col space-y-3 md:flex-row  md:flex-nowrap md:space-x-4"
                key={i}
              >
                <div className=" md:w-3/12">
                  <Link href={'breed/' + item?.id}>
                    <a>
                      <Image
                        className="cursor-pointer rounded-3xl object-cover object-center"
                        src={item?.url}
                        layout="responsive"
                        height={250}
                        width={250}
                      />
                    </a>
                  </Link>
                </div>

                <div className=" md:w-9/12">
                  <h2 className="text-4xl font-semibold text-i-primary">
                    {i + 1}. {item.name}
                  </h2>
                  <h2 className="mt-5 text-lg font-medium text-i-primary">
                    {item?.description}
                  </h2>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default TopTen