import React, {
  FC,
  memo,
  useReducer,
  useRef,
  useEffect,
} from 'react';
import {
  createSmartappDebugger,
  createAssistant,
  AssistantAppState,
} from '@sberdevices/assistant-client';
import { reducer, actions } from './store';
import { fetchSongList } from '../../network/apiCalls';
import { Carousel, CarouselGridWrapper, Row, Container, useRemoteHandlers, CarouselItem } from '@sberdevices/plasma-ui';
import { isSberBox } from '@sberdevices/plasma-ui/utils';
import SongCard from './SongCard';

const initializeAssistant = (getState: any) => {
  if (process.env.NODE_ENV === 'development') {
    return createSmartappDebugger({
      token: process.env.REACT_APP_TOKEN ?? '',
      initPhrase: `Запусти ${process.env.REACT_APP_SMARTAPP}`,
      getState,
    });
  }

  return createAssistant({ getState });
};

export const SongList: FC = memo(() => {
  const [appState, dispatch] = useReducer(reducer, { songs: [] });
  const { songs } = appState;
  const { setSongs } = actions;
  const assistantStateRef = useRef<AssistantAppState>();
  const assistantRef = useRef<ReturnType<typeof createAssistant>>();

  useEffect(() => {
    assistantRef.current = initializeAssistant(() => assistantStateRef.current);

    assistantRef.current.on('data', ({ action }: any) => {
      if (action) {
        dispatch(action);
      }
    });

    const fetchData = async () => {
      return await fetchSongList();
    };

    fetchData()
      .then(({ data }) => {
        dispatch(setSongs(data));
      });
  }, []);

  useEffect(() => {
    assistantStateRef.current = {
      item_selector: {
        items: appState.songs.map(({ _id, title }, index) => ({
          number: index + 1,
          id: _id,
          title,
        })),
      },
    };
  }, [appState]);

  const isSberbox = isSberBox();
  const delay = isSberbox ? 300 : 30;
  const longDelay = isSberbox ? 1500 : 150;
  const [index, setIndex] = useRemoteHandlers({
    initialIndex: 0,
    axis: 'x',
    delay,
    longDelay,
    min: 0,
    max: 6,
  });

  // const animatedScrollByIndex = boolean('animatedScrollByIndex', isSberbox);
  // const scrollSnapType = !isSberbox ? select('scrollSnapType', snapTypes, 'mandatory') : undefined;
  // const scrollSnapAlign = !isSberbox ? select('scrollSnapAlign', snapAlign, 'center') : undefined;
  // const detectActive = boolean('detectActive', true) as true;
  // const detectThreshold = number('detectThreshold', 0.5);

  return (
    <Container>
      <CarouselGridWrapper>
        <Carousel
          as={Row}
          axis="x"
          index={index}
          animatedScrollByIndex
          scrollSnapType="mandatory"
          detectActive
          detectThreshold={0.5}
          // scaleCallback={scaleCallback}
          // scaleResetCallback={scaleResetCallback}
          onIndexChange={(i) => {
            console.log({ i });
            setIndex(i);
          }}
          paddingStart="50%"
          paddingEnd="50%"
          style={{ paddingTop: '5rem', paddingBottom: '1rem' }}
          scrollAlign="center"
        >
          {songs.concat(songs.concat(songs.concat(songs.concat(songs.concat(
            songs.concat(songs))))))
            .map((song, i) => (
              <CarouselItem scrollSnapAlign="start">
                <SongCard
                  title={song.title}
                  key={`item:${i}`}
                  focused={i === index}
                  imageSrc={song.image_link}
                  id={song._id}
                />
              </CarouselItem>
            ))}
        </Carousel>
      </CarouselGridWrapper>
    </Container>
  );
});

export default SongList;