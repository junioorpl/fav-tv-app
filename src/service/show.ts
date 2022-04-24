import {AxiosInstance} from 'axios';

const showAPI = (axios: AxiosInstance) => {
  return {
    fetchShows: (page: number) => axios.get(`shows?page=${page}`),
    searchShows: (name: string) => axios.get(`search/shows?q=${name}`),
    searchCastShows: (id: number) =>
      axios.get(`people/${id}/castcredits?embed=show`),
    fetchShowById: (id: number) =>
      axios.get(`shows/${id}?embed[]=episodes&embed[]=cast`),
  };
};

export default showAPI;
