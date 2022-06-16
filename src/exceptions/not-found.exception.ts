import HttpException from "./http.exception";
// import HTTP_STATUS from "../enums/http-status.enum";

export default class NotFoundException extends HttpException {
  constructor(message: string) {
    super(message, 404)
  }
}
