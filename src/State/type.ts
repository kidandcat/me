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
