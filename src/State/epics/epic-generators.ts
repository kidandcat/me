import { Observable } from "rxjs/Rx";
import { ajax } from "rxjs/observable/dom/ajax";
import "rxjs/Rx";
import { IRequestStatus } from "../type";

export const generateRequestEpic = (url: string, Actions: IRequestStatus) => (
  action$: any
) =>
  action$.ofType(Actions.requestInit).mergeMap(() =>
    ajax
      .getJSON(url)
      .map(response => ({
        type: Actions.requestSuccess,
        payload: response
      }))
      .takeUntil(action$.ofType(Actions.requestCancel))
      .catch(error =>
        Observable.of({
          type: Actions.requestFailed,
          payload: error.xhr.response
        })
      )
  );
