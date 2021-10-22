import { Request, Response } from "express";
import { CreateMessageService } from "../services/CreateMessageService";


class CreateMessageController {
  async handle(req: Request, res: Response) {
    const { message } = req.body;
    const { user_id } = req;  
    console.log("msg", message);
    const service = new CreateMessageService();
    const result = service.execute(message, user_id);
    
    return res.json(result);
  }
}

export { CreateMessageController };