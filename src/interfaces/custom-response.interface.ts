import { Response } from "express";

export interface CustomResponse extends Response {
  errorHandler?: Function
}
