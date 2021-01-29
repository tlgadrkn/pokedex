import * as React from 'react';

function asyncReducer(state, action) {
  switch (action.type) {
    case 'pending':
      return { status: 'pending', data: null, error: null };
    case 'resolved': {
      return { status: 'resolved', data: action.data, error: null };
    }
    case 'rejected': {
      return { status: 'rejected', data: null, error: action.error };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export function useAsync(asyncCallback, initialState, dependencies) {
  const [state, dispatch] = React.useReducer(asyncReducer, {
    status: 'idle',
    data: null,
    error: null,
    ...initialState,
  });

  React.useEffect(() => {
    const promise = asyncCallback();
    if (!promise) {
      return;
    }
    dispatch({ type: 'pending' });
    promise.then(
      (data) => {
        dispatch({ type: 'resolved', data });
      },
      (err) => {
        dispatch({ type: 'rejected', err });
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependencies]);

  return state;
}
