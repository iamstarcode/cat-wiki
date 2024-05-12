"use client"

import React, { useState } from "react"
import { useLocalStorage } from "react-use"

const RecentSearches: React.FC = () => {
  const [recentSearches, _] = useLocalStorage<string[]>("recentSearches", [])

  // console.log(recentSearches)
  return (
    <div>
      <ul>
        {recentSearches?.map((search, index) => <li key={index}>{search}</li>)}
      </ul>
    </div>
  )
}

export default RecentSearches
