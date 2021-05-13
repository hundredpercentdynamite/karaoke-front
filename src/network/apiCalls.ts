import http from './httpClient';
import { SongDTO } from '../models/songs';

export const fetchSongData = (id: string) => {
  return http.get<SongDTO>(`/songs/${id}`)
};

export const fetchSongList = () => {
  return http.get<Array<SongDTO>>(`/songs`)
};
