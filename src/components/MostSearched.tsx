"use client"

import React, { useEffect, useState } from "react"
import { useLocalStorage } from "react-use"

const RecentSearches: React.FC = () => {
  const [recentSearches, _] = useLocalStorage<string[]>("recentSearches", [])
  const [breeds, setBreeds] = useState<any | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      if (recentSearches != null) {
        const url = `/api/breeds-image?ids=${recentSearches?.join(",")}`
        const response = await fetch(url)
        const data = await response.json()
        //console.log(data.mostSearched, "dcknjrndjnjdnj")
        setBreeds(data.data)
      }
    }

    fetchData()
  }, [recentSearches])

  return (
    <div>
      <ul>
        {recentSearches?.map((search, index) => <li key={index}>{search}</li>)}
      </ul>
    </div>
  )
}

export default RecentSearches
