import { useEffect, useRef, useState } from 'react'
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled'
import { axios } from '../libs/axios'
import { exit } from 'process'
import { useRouter } from 'next/router'

export default function UseAutocomplete({ options }) {
  const router = useRouter()

  const [breedId, setBreedId] = useState('')

  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: 'use-autocomplete',
    options: options,
    onChange: (x, y, z, optionDetails) => {
      setBreedId(optionDetails?.option.id)
    },
    getOptionLabel: (option) => option.name,
  })

  async function handleSubmit(e) {
    e.preventDefault()
    if (breedId?.length == 0) {
      return
    } else {
      /* await axios
        .post('/search-by-breed', { breed_id: breedId })
        .then((res) => res)
        .catch((e) => {
          if (e.response.status == 422) {
            alert(e.response.data.message)
          }
        }) */
      router.push('breed/' + breedId)
    }
  }

  return (
    <div>
      <div
        className="relative mt-3 mb-3 text-gray-600 md:w-max"
        {...getRootProps()}
      >
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            autoFocus
            name="breed"
            placeholder="Enter breed"
            className="h-10 w-full rounded-full bg-white px-5 pr-10 text-i-primary focus:border-i-primary focus:ring-i-primary md:max-w-xs"
            type="text"
            {...getInputProps()}
          />

          <button type="submit" className="absolute inset-y-0 right-3">
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </form>
        {groupedOptions.length > 0 ? (
          <div
            className="absolute mt-2 w-full rounded-md bg-white p-1"
            {...getListboxProps()}
          >
            <ul className="scrollbar bg- z-10  max-h-52 list-none overflow-auto bg-white">
              {groupedOptions.map((option, index) => (
                <li
                  className=" focus::bg-slate-500 mx-1 rounded-md py-2 px-2 text-black hover:cursor-pointer hover:bg-slate-100"
                  {...getOptionProps({ option, index })}
                >
                  {option.name}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  )
}
