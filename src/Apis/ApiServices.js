import axios from 'axios';

const baseUrl = 'https://rh07d1s8ga.execute-api.us-east-1.amazonaws.com/prod/api/courses'
export default (
  method,
  path,
  data,
  queryParams = {},
  headers = {}
  ) => axios({
    method,
    url: `${baseUrl}${path}`,
    data,
    params: {
      ...queryParams
    },
    headers
  });