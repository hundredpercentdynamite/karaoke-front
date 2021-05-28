import React, {
  memo,
  useEffect,
} from 'react';
import { fetchSongList } from '../../network/apiCalls';
import {
  Carousel,
  CarouselGridWrapper,
  Row,
  Container,
  useRemoteHandlers,
  CarouselCol,
} from '@sberdevices/plasma-ui';
import { isSberBox } from '@sberdevices/plasma-ui/utils';
import SongCard from './SongCard';
import { AppState, appActions } from '../../App/store';
import { createAssistant } from '@sberdevices/assistant-client';


export type SongListProps = Readonly<{
  dispatch: Function;
  appState: AppState;
  assistantRef?: ReturnType<typeof createAssistant>
}>;

export const SongList = memo((props: SongListProps) => {
  const { dispatch, appState, assistantRef } = props;
  const { songs } = appState;
  const { setSongs } = appActions;

  useEffect(() => {
    const fetchData = async () => {
      return await fetchSongList();
    };

    fetchData()
      .then(({ data }) => {
        dispatch(setSongs(data));
      });
  }, []);

  const isSberbox = isSberBox();
  const delay = isSberbox ? 300 : 30;
  const longDelay = isSberbox ? 1500 : 150;
  const [index, setIndex] = useRemoteHandlers({
    initialIndex: 0,
    axis: 'x',
    delay,
    longDelay,
    min: 0,
    max: songs.length - 1,
  });

  const onSongChoose = () => {
    if (assistantRef) {
      assistantRef.sendData({ action: { action_id: 'songChosen'}})
    }
  }

  return (
    <Container>
      <CarouselGridWrapper>
        <Carousel
          as={Row}
          axis="x"
          index={index}
          animatedScrollByIndex
          scrollSnapType="proximity"
          detectActive
          detectThreshold={0.5}
          onIndexChange={(i) => {
            setIndex(i);
          }}
          paddingStart="50%"
          paddingEnd="50%"
          style={{ paddingTop: '5rem', paddingBottom: '2rem' }}
          scrollAlign="center"
        >
          {songs.map((song, i) => (
            <CarouselCol scrollSnapAlign="start" size={4} key={`item:${i}`}>
              <SongCard
                index={i + 1}
                title={song.title}
                focused={i === index}
                imageSrc={song.image_link}
                id={song._id}
                onSongChoose={onSongChoose}
              />
            </CarouselCol>
          ))}
        </Carousel>
      </CarouselGridWrapper>
    </Container>
  );
});

export default SongList;