import HTTP_STATUS from "../enums/http-status.enum";
import HttpException from "./http.exception";
// import HTTP_STATUS from "../enums/http-status.enum";

export default class BadRequestException extends HttpException {
  constructor(message: string) {
    super(message, HTTP_STATUS.BAD_REQUEST)
  }
}
