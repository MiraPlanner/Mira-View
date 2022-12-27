import { API_URL } from './environment'

interface ApiCalls {
  token?: string
  apiUrl?: string
  path: string
  method: 'POST' | 'GET' | 'PUT' | 'DELETE'
  body?: string | IssueProps | SprintProps | CreateSprintProps
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
  issueStatus: number
  issueType: number
}

export type SprintProps = {
  id?: string | undefined
  name: string
  goal?: string | undefined
  startDate?: string | undefined
  endDate?: string | undefined
  issues: IssueProps[]
  createdAt: string
  updatedAt: string
}

export type CreateSprintProps = {
  name: string
  goal?: string | undefined
  startDate?: string | undefined
  endDate?: string | undefined
}

interface IssuePropsResponse extends BaseApiResponse {
  response: IssueProps
}

interface SprintPropsGetResponse extends BaseApiResponse {
  response: SprintProps[]
}

interface BacklogPropsResponse extends BaseApiResponse {
  response: IssueProps[]
}

interface SprintPropsCreateResponse extends BaseApiResponse {
  response: SprintProps
}

const callApi = async ({ apiUrl, path, method, body }: ApiCalls) => {
  const url = `${apiUrl || API_URL}/${path}`

  console.log(url)

  const fetchOptions: RequestInit = {
    method,
    headers: {
      'Content-type': 'application/json',
    },
  }

  if (body) fetchOptions.body = typeof body === 'string' ? body : JSON.stringify(body)

  if (body) fetchOptions.body = typeof body === 'string' ? body : JSON.stringify(body)

  try {
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
    apiUrl: 'http://localhost:80',
    path: 'issues',
    method: 'POST',
    body: issueProps,
  })

export const getSprints = (): Promise<SprintPropsGetResponse> =>
  callApi({
    apiUrl: 'http://localhost:80',
    path: 'sprints',
    method: 'GET',
  })

export const getBacklog = (): Promise<BacklogPropsResponse> =>
  callApi({
    apiUrl: 'http://localhost:80',
    path: 'sprints/backlog',
    method: 'GET',
  })

export const createSprint = (
  createSprintProps: CreateSprintProps,
): Promise<SprintPropsCreateResponse> =>
  callApi({
    apiUrl: 'http://localhost:80',
    path: 'sprints',
    method: 'POST',
    body: createSprintProps,
  })
