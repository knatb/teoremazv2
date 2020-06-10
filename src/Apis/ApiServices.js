import axios from 'axios';

const baseUrl = ''

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