export type ObjectAnyKey = Record<string, any>;
export type State<T> = T;

export type MappedReducer<T> = (state: State<T>, payload: any) => State<T>;
export type ReducersMap<T> = {
  [key: string]: MappedReducer<T>;
}

export type ActionCreator = (type: string) => (payload: ObjectAnyKey) => Action;
export type Action = {
  type: string;
  payload: any;
}
export type ActionsMap = {
  [key: string]: (payload: ObjectAnyKey) => Action;
}


export type Reducer<T> = (state: State<T>, action: Action) => State<T>;
export type CreatedReducers<T> = {
  reducer: Reducer<T>;
  actions: ActionsMap,
}




export const createAction: ActionCreator = (type: string) => {
  return (payload) => {
    return {
      type,
      payload,
    };
  };
};


export function createReducer<T>(obj: ReducersMap<T>): CreatedReducers<T> {
  const reducerMap: ReducersMap<T> = { ...obj };
  const actionsMap: ActionsMap = Object.keys(reducerMap).reduce((acc, key) => {
    return {
      ...acc,
      [key]: createAction(key),
    };
  }, {});

  const reducer = (state: State<T>, action: Action) => {
    return reducerMap[action.type](state, action.payload);
  };

  return { actions: actionsMap, reducer };
}



export function setIn<S>(data: S, path: Array<string>, value: any): S | any {
  let modifiedData;
  if (Array.isArray(data)) {
    modifiedData = [...data];
  } else {
    modifiedData = { ...data };
  }
  let currentItem: any = modifiedData;
  path.forEach((key, index) => {
    if (index === path.length - 1) {
      currentItem[key] = value;
    } else {
      if (!currentItem[key]) {
        currentItem[key] = {};
      }

      currentItem = currentItem[key];
    }
  });

  return modifiedData;
}

export function getIn<S>(data: S, path: Array<string>) : any {
  let modifiedData;
  if (Array.isArray(data)) {
    modifiedData = [...data];
  } else {
    modifiedData = { ...data };
  }
  let currentItem: any = modifiedData;
  path.forEach((key) => {
    if (!currentItem[key]) {
      currentItem = '';
      return;
    }

    currentItem = currentItem[key];
  });

  return currentItem;
}
