const sseUrl = () =>
  `${process.env.NEXT_PUBLIC_API_SERVER_URL || 'http://localhost:8000'}/sse`

const sseService = {
  sseUrl
}

export default sseService
