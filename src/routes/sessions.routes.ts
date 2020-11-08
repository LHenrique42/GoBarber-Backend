import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';
import UserMap from '../mappers/User';

const sessionRouter = Router();

sessionRouter.post('/', async (request, response) => {
    try {
        const { email, password } = request.body;

        const authenticateUser = new AuthenticateUserService();

        const { user, token } = await authenticateUser.execute({
            email,
            password,
        });

        const userDTO = UserMap.toDTO(user);

        response.json({ userDTO, token });
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
    return null;
});

export default sessionRouter;
