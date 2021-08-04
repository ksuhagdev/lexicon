import {apiRequest} from './service';

export const callApi = type => {
  return apiRequest({
    apiUrl: `https://challenge.lexicondigital.com.au/api/v2/${type}/movies`,
    method: 'GET',
  });
};
