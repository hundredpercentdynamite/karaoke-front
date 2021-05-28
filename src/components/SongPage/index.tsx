import React, { useEffect, useReducer, useRef } from 'react';
import RabbitLyrics from 'rabbit-lyrics';
import { useParams } from 'react-router';
import {
  Card,
  CardBody,
  CardContent,
  Spinner, Stepper,
} from '@sberdevices/plasma-ui';
import { fetchSongData } from '../../network/apiCalls';
import { SongDTO } from '../../models/songs';
import { createReducer } from '../../utils/reducer';
import './styles.scss';
import { AppState } from '../../App/store';

export type SongPageProps = Readonly<{
  dispatch: Function;
  appState: AppState;
}>;
export type SongPageState = {
  isLoading: boolean;
  isPlaying: boolean;
  song: SongDTO;
  volume: number;
};

const defaultSongFields = {
  audio_link: '',
  image_link: '',
  lyrics: '',
  title: '',
  _id: '',
};
const defaultSongPageState = {
  song: defaultSongFields,
  isLoading: true,
  isPlaying: false,
  volume: 0.5,
}

const { actions, reducer } = createReducer<SongPageState>({
  setSong: (state, payload) => {
    return {
      ...state,
      song: payload,
    }
  },
  setPlayingFlag: (state, payload) => {
    return {
      ...state,
      isPlaying: payload,
    }
  },
  setLoadingFlag: (state, payload) => {
   return {
     ...state,
     isLoading: payload,
   }
  },
  setVolume: (state, payload) => {
    return {
      ...state,
      volume: payload,
    }
  },
});

const SongPage = (props: SongPageProps) => {
  const { songId } = useParams<{ songId: string }>();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lyricsRef = useRef<HTMLDivElement | null>(null);
  const rabbitInst = useRef<any>();

  const { setSong, setPlayingFlag, setLoadingFlag, setVolume } = actions;
  const [state, dispatch] = useReducer(reducer, defaultSongPageState);
  const { song, isPlaying, isLoading, volume } = state;

  useEffect(() => {
    dispatch(setLoadingFlag(true));
    const fetchSong = async (): Promise<{ data: SongDTO }> => {
      return fetchSongData(songId);
    };
    fetchSong()
      .then(({ data }) => {
        dispatch(setSong(data));
      })
      .finally(() => {
        dispatch(setLoadingFlag(false));
      });
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

  const onPlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      dispatch(setPlayingFlag(true));
    }
  }

  const onPause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      dispatch(setPlayingFlag(false));
    }
  }

  const onVolumeChange = (value: number) => {
    if (audioRef.current) {
      const level = value / 10;
      audioRef.current.volume = level;
      dispatch(setVolume(level));
    }
  }
  const onSongEnded = () => {
    dispatch(setPlayingFlag(false));
  }

  const imageClickHandler = !isPlaying ? onPlay : onPause;
  const controlButtonClassName = !isPlaying ? 'play_button' : 'pause_button';
  const imgBackground = { background: `url(${image_link}) center / cover no-repeat`}

  return (
    <div className="song_page">
      { isLoading ? <div className="spinner_wrapper"><Spinner /></div> :
        <div className="controls">
          <div className="volume">
            <Stepper
              showRemove
              value={volume * 10}
              step={1}
              min={0}
              max={10}
              disabled={false}
              onChange={onVolumeChange}
              onRemove={() => {}}
              className="volume_control"
            />
            <img className="volume_icon" src="/volume.svg" alt="volume" width={20} height={20} />
          </div>
          <div className="image_container" onClick={imageClickHandler}>
            <div className="song_image" style={imgBackground} />
            <div className={controlButtonClassName} />
          </div>
        </div>

      }
      <Card className="lyrics_card">
        <CardBody>
          <CardContent>
            {audio_link &&
            <audio id="audio-1" ref={audioRef} onEnded={onSongEnded}>
              <source src={audio_link} type="audio/mpeg" />
            </audio>
            }
            <div id="lyrics-1" className="rabbit-lyrics" data-media="#audio-1" ref={lyricsRef} data-view-mode="mini">
              {lyrics}
            </div>
          </CardContent>
        </CardBody>
      </Card>
    </div>
  );
};

SongPage.defaultProps = {};

export default SongPage;