export async function GET() {
  const headers = new Headers({
    "x-api-key": process.env.NEXT_PUBLIC_API_KEY!,
    "Content-Type": "application/json",
  })

  const res = await fetch("https://api.thecatapi.com/v1/breeds", {
    method: "GET",
    headers,
    redirect: "follow",
  })

  const data = await res.text()

  const parsed = JSON.parse(data)
  return Response.json({ data: parsed })
}
