import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers;

      const id = String(user_id);

      const users = this.listAllUsersUseCase.execute({ user_id: id });

      return response.status(200).json(users);
    } catch (err) {
      return response.status(err.status).json({ error: err.message });
    }
  }
}

export { ListAllUsersController };
