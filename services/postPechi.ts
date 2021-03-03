import PechiRequest from '~/type/PechiRequest'
import PechiResponse from '~/type/PechiResponse'

export const postPechi = async (
  params: PechiRequest
): Promise<PechiResponse> => {
  const response = await fetch('/api/pechi', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })
  return (await response.json()) as PechiResponse
}

export default postPechi
