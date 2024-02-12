type Props = {
  params: {
    id: string
  }
  searchParams: {
    genre: string
  }
}

export default function GenrePage({
  params: { id },
  searchParams: { genre },
}: Props) {
  console.log(id, genre)

  return <div>page</div>
}
