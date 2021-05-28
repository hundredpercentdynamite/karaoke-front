import React, { useEffect, useReducer, useRef } from 'react';
import { Switch, Route, useHistory, useRouteMatch } from 'react-router-dom';
import SongList from '../components/SongList';
import './App.scss';
import SongPage from '../components/SongPage';
import { appReducer } from './store';
import { AssistantAppState, createAssistant, createSmartappDebugger } from '@sberdevices/assistant-client';
import { Container, Header } from '@sberdevices/plasma-ui';

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

function App() {
  const [appState, dispatch] = useReducer(appReducer, { songs: [] });
  const assistantStateRef = useRef<AssistantAppState>();
  const assistantRef = useRef<ReturnType<typeof createAssistant>>();
  const history = useHistory();

  const redirectToSong = (id: string) => {
    history.push(`/song/${id}`);
  }
  const redirectToRoot = () => {
    history.push('/');
  }
  useEffect(() => {
    assistantRef.current = initializeAssistant(() => assistantStateRef.current);

    assistantRef.current.on('data', ({ action, interaction, navigation, system }: any) => {
      if (system?.command === 'BACK') {
        history.goBack();
      }
      if (interaction && interaction?.payload) {
        redirectToSong(interaction.payload);
        return;
      }
      if (action) {
        dispatch(action);
      }
    });
  }, []);

  useEffect(() => {
    assistantStateRef.current = {
      item_selector: {
        items: appState.songs.map(({ _id, title }, index) => ({
          number: index + 1,
          id: _id,
          title: `${index + 1}`,
        })),
      },
    };
  }, [appState]);

  const songPageMatch = useRouteMatch<{ songId: string; }>('/song/:songId');
  const isSongPage = Boolean(songPageMatch)
  const songId = songPageMatch?.params?.songId;
  const headerTitle = appState.songs.find(({ _id }) => _id === songId)?.title;
  return (
    <div className="App">
      <Container className="container">
        {
          isSongPage ?
            <Header back={true} title={headerTitle || 'Песня'} onBackClick={redirectToRoot} /> :
            <Header back={false} title="Караоке"/>
        }
        <Switch>
          <Route path="/song/:songId" component={SongPage}>
            <SongPage dispatch={dispatch} appState={appState} />
          </Route>
          <Route path="/" exact component={SongList}>
            <SongList dispatch={dispatch} appState={appState} />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
