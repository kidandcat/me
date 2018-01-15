import { IRequestStatus } from "../type";

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
