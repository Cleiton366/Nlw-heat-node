import { prisma } from "../prisma";

class GetLast3MessageService {
  async execute() {
    const message = await prisma.message.findMany({
        take: 3,
        orderBy: {
            created_at: "desc"
        },
        include: {
            user: true
        }
    });

    return message;
  }
}

export { GetLast3MessageService };
