import { Observable } from "rxjs/Rx";
import { ajax } from "rxjs/observable/dom/ajax";
import "rxjs/Rx";

export enum RequestStatus {
  init = "INIT",
  success = "SUCCESS",
  failed = "FAILED",
  inProgress = "IN_PROGRESS",
  cancel = "CANCEL"
}

export interface IRequestStatus {
  requestInit: string;
  requestSuccess: string;
  requestFailed: string;
  requestInProgress: string;
  requestCancel: string;
}

export const generateRequestReducer = (
  Actions: IRequestStatus,
  statusStatePath: string,
  payloadStatePath: string
) => (state: any, action: any) => {
  switch (action.type) {
    case Actions.requestInit:
      return {
        ...state,
        [statusStatePath]: RequestStatus.init
      };
    case Actions.requestInProgress:
      return {
        ...state,
        [statusStatePath]: RequestStatus.inProgress
      };
    case Actions.requestSuccess:
      return {
        ...state,
        [statusStatePath]: RequestStatus.success,
        [payloadStatePath]: action.payload
      };
    case Actions.requestFailed:
      return {
        ...state,
        [statusStatePath]: RequestStatus.failed,
        [payloadStatePath]: action.payload
      };
    case Actions.requestCancel:
      return {
        ...state,
        [statusStatePath]: RequestStatus.cancel
      };
    default:
      return state;
  }
};

export const generateRequestActions = (Actions: IRequestStatus) => ({
  init: () => ({
    type: Actions.requestInit
  }),
  inProgress: () => ({
    type: Actions.requestInProgress
  }),
  success: (payload: any) => ({
    type: Actions.requestSuccess,
    payload
  }),
  failed: (payload: any) => ({
    type: Actions.requestFailed,
    payload
  }),
  cancel: () => ({
    type: Actions.requestCancel
  })
});

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
