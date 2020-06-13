import axios from 'axios';

const baseUrl = 'https://jq10go71jc.execute-api.us-east-1.amazonaws.com/prod/users';

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
  params: queryParams,
  headers: {
    ...headers,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3000'
  }
});