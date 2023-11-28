import { User } from 'src/user/entity/user.entity';

type RequestWithUser = Request & { user: User };

export { type RequestWithUser };
