import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';
import UserMap from '../mappers/User';

const sessionRouter = Router();

sessionRouter.post('/', async (request, response) => {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    const { user, token } = await authenticateUser.execute({
        email,
        password,
    });

    const userDTO = UserMap.toDTO(user);

    response.json({ userDTO, token });
});

export default sessionRouter;
