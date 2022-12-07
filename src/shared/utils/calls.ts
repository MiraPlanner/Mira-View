import { API_URL } from './environment'

interface ApiCalls {
  token?: string
  apiUrl?: string
  path: string
  method: 'POST' | 'GET' | 'PUT' | 'DELETE'
  body?: string | IssueProps
}

interface BaseApiResponse {
  error: boolean
  errorCode?: string | null
  errorMessage?: string
}

export type IssueProps = {
  id?: string
  sprintId: string | undefined
  title: string
  description?: string | undefined
  duration?: number | undefined
  status: number
  type: number
}

interface IssuePropsResponse extends BaseApiResponse {
  response: IssueProps
}

const callApi = async ({ apiUrl, path, method, body }: ApiCalls) => {
  const url = `${apiUrl || API_URL}/${path}`

  const fetchOptions: RequestInit = {
    method,
    headers: {
      'Content-type': 'application/json',
    },
  }

  if (body) fetchOptions.body = typeof body === 'string' ? body : JSON.stringify(body)

  if (body) fetchOptions.body = typeof body === 'string' ? body : JSON.stringify(body)

  try {
    console.log(url)
    console.log(fetchOptions)

    const response = await fetch(url, fetchOptions)
    const responseText = await response.text()
    return {
      error: false,
      response: responseText && responseText.length > 0 ? JSON.parse(responseText) : {},
    }
  } catch (e) {
    return {
      response: e,
      error: true,
    }
  }
}

export const createIssue = (issueProps: IssueProps): Promise<IssuePropsResponse> =>
  callApi({
    apiUrl: 'http://localhost:5001',
    path: 'issues',
    method: 'POST',
    body: issueProps,
  })
