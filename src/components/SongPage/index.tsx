import React, { useEffect, useRef, useState } from 'react';
import RabbitLyrics from 'rabbit-lyrics';
import './styles.scss';
import { useParams } from 'react-router';
import { fetchSongData } from '../../network/apiCalls';
import { SongDTO } from '../../models/songs';

export type SongPageProps = Readonly<{}>;

const defaultSongFields = {
  audio_link: '',
  image_link: '',
  lyrics: '',
  title: '',
  _id: '',
};

const SongPage = (props: SongPageProps) => {
  const { songId } = useParams<{ songId: string }>();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lyricsRef = useRef<HTMLDivElement | null>(null);
  const rabbitInst = useRef<any>();
  const [song, setSong] = useState<SongDTO>(defaultSongFields);
  useEffect(() => {
    const fetchSong = async (): Promise<{ data: SongDTO }> => {
      return fetchSongData(songId);
    };
    fetchSong()
      .then(({ data }) => setSong(data));
  }, []);

  const {
    audio_link,
    image_link,
    lyrics,
  } = song;

  useEffect(() => {
    if (audioRef.current && lyricsRef.current) {
      rabbitInst.current = new RabbitLyrics(
        lyricsRef.current,
        audioRef.current,
      );
      rabbitInst.current.setLyrics(lyrics.replaceAll('\\n', '\n'));
    }
  }, [song]);

  return (
    <>
      {audio_link &&
      <audio id="audio-1" controls ref={audioRef}>
        <source src={audio_link} type="audio/mpeg" />
      </audio>
      }
      <div id="lyrics-1" className="rabbit-lyrics" data-media="#audio-1" ref={lyricsRef} data-view-mode="mini">
        {lyrics}
      </div>
    </>
  );
};

SongPage.defaultProps = {};

export default SongPage;