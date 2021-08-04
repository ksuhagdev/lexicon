import axios from 'axios';

export async function callApi(authOptions) {
  const returnVal = {};
  let responsecode = null;
  console.log('authOptions', authOptions);
  await axios(authOptions)
    .then(res => {
      returnVal.response_type = 'success';
      returnVal.response = res.data;
      responsecode = returnVal;
    })
    .catch(error => {
      returnVal.response_type = 'fail';
      returnVal.response = error.response.data;
      responsecode = returnVal;
    });
  if (responsecode) {
    return responsecode;
  }
}

export const apiRequest = ({apiUrl, method}) => {
  let authOptions = {
    method,
    url: apiUrl,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-api-key': `Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7`,
    },
    json: true,
  };

  return callApi(authOptions);
};
