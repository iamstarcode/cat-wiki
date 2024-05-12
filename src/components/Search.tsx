"use client"

import * as React from "react"
import { useMedia } from "react-use"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type Breed = {
  id: string
  label: string
  name: string
  refrenceImageId: string
}

export default function Search(props: any) {
  const mapped = props.breeds.map((item: any) => ({
    name: item.name,
    id: item.id,
    value: item.id,
    label: item.name,
    refrenceImageId: item.reference_image_id ? item.reference_image_id : "",
  }))

  const [open, setOpen] = React.useState(false)
  const isDesktop = useMedia("(min-width: 768px)", true)

  const [selectedBreed, setSelectedBreed] = React.useState<Breed | null>(null)

  React.useEffect(() => {
    if (selectedBreed != null) {
      console.log(selectedBreed)
    }
  }, [selectedBreed])

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="text-i-primary w-[150px] justify-start"
          >
            {selectedBreed ? <>{selectedBreed.label}</> : <>Search breed...</>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <BreedList
            mapped={mapped}
            setOpen={setOpen}
            setSelectedBreed={setSelectedBreed}
          />
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="w-[150px] text-i-primary justify-start"
        >
          {selectedBreed ? <>{selectedBreed.label}</> : <>Search breed...</>}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <BreedList
            mapped={mapped}
            setOpen={setOpen}
            setSelectedBreed={setSelectedBreed}
          />
        </div>
      </DrawerContent>
    </Drawer>
  )
}

function BreedList({
  setOpen,
  setSelectedBreed,
  mapped,
}: {
  setOpen: (open: boolean) => void
  setSelectedBreed: (breeds: Breed | null) => void
  mapped: Breed[]
}) {
  return (
    <Command>
      <CommandInput placeholder="Filter Breed..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {mapped.map((breed) => (
            <CommandItem
              key={breed.id}
              value={breed.id}
              onSelect={(id) => {
                setSelectedBreed(
                  mapped.find((priority) => priority.id === id) || null
                )
                setOpen(false)
              }}
            >
              {breed.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
