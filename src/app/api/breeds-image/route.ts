export async function GET(request: Request) {
  const headers = new Headers({
    "x-api-key": process.env.NEXT_PUBLIC_API_KEY!,
    "Content-Type": "application/json",
  })

  const { searchParams } = new URL(request.url)
  const mostSearched: any = []

  const breedIds = searchParams.get("ids")?.split(",") // Assuming query params
  //console.log(request.url, breedIds, ";vkrgnkrgnkrgk")

  if (breedIds?.length! < 0) return Response.json({ data: null })

  for (const breedId of breedIds!) {
    //Image URL parsed[0].url
    const res = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=${breedId}`,
      {
        method: "GET",
        headers,
      }
    )

    const data = await res.text()
    const parsed = JSON.parse(data)

    mostSearched.push({
      imageUrl: parsed[0].url,
      name: parsed[0].breeds[0].name,
      id: parsed[0].breeds[0].id,
    })
  }

  return Response.json({ data: mostSearched })
}
