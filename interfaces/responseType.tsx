import { ICurrentVoteStatus } from './interface';

interface ILogInResponseType {
  data: {
    message: string;
    user: string;
    access: string;
    refresh: string;
    is_voted: boolean;
  };
  status: number;
  statusText: string;
  headers: {};
  config: {};
  request: XMLHttpRequest;
}

interface ISignUpResponseType {
  data: {
    message: string;
    user: string;
    access: string;
    refresh: string;
  };
  status: number;
  statusText: string;
  headers: {};
  config: {};
  request: XMLHttpRequest;
}
interface IAddCandidateNameResponseType {
  data: {
    message: string;
    id: number;
    name: string;
    count: number;
  };
  status: number;
  statusText: string;
  headers: {};
  config: {};
  request: XMLHttpRequest;
}

interface IVoteToCandidateResponseType {
  data: {
    message: string;
  };
  status: number;
  statusText: string;
  headers: {};
  config: {};
  request: XMLHttpRequest;
}

interface ICurrentVoteStatusResponseType {
  data: ICurrentVoteStatus;
  status: number;
  statusText: string;
  headers: {};
  config: {};
  request: XMLHttpRequest;
}

export type {
  ILogInResponseType,
  ISignUpResponseType,
  IAddCandidateNameResponseType,
  IVoteToCandidateResponseType,
  ICurrentVoteStatusResponseType,
};
