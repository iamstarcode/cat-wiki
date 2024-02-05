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

type Status = {
  value: string
  label: string
}

const statuses: Status[] = [
  {
    value: "backlog",
    label: "Backlog",
  },
  {
    value: "todo",
    label: "Todo",
  },
  {
    value: "in progress",
    label: "In Progress",
  },
  {
    value: "done",
    label: "Done",
  },
  {
    value: "canceled",
    label: "Canceled",
  },
]

export default function Search(breeds: any) {
  const mapped = breeds.breeds.map((item: any) => ({
    name: item.name,
    id: item.id,
    value: item.id,
    label: item.name,
    refrenceImageId: item.reference_image_id ? item.reference_image_id : "",
  }))

  const [open, setOpen] = React.useState(false)
  const isDesktop = useMedia("(min-width: 768px)", true)

  const [selectedBreed, setSelectedBreed] = React.useState<Status | null>(null)

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
          <StatusList
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
          <StatusList
            mapped={mapped}
            setOpen={setOpen}
            setSelectedBreed={setSelectedBreed}
          />
        </div>
      </DrawerContent>
    </Drawer>
  )
}

function StatusList({
  setOpen,
  setSelectedBreed,
  mapped,
}: {
  setOpen: (open: boolean) => void
  setSelectedBreed: (status: Status | null) => void
  mapped: any
}) {
  return (
    <Command>
      <CommandInput placeholder="Filter status..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {mapped.map((status: any) => (
            <CommandItem
              key={status.value}
              value={status.value}
              onSelect={(value) => {
                setSelectedBreed(
                  statuses.find((priority) => priority.value === value) || null
                )
                setOpen(false)
              }}
            >
              {status.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
