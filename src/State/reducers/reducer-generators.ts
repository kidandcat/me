import { IRequestStatus, RequestStatus } from "../type";

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
