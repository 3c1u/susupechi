import PechiResponse from '~/type/PechiResponse'

export const getPechi = async (): Promise<PechiResponse> => {
  const response = await fetch('/api/pechi', { method: 'get' })
  return (await response.json()) as PechiResponse
}

export default getPechi
