import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';
import UserMap from '../mappers/User';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
    try {
        const { name, email, password } = request.body;

        const createUser = new CreateUserService();
        const user = await createUser.execute({
            name,
            email,
            password,
        });

        const userDTO = UserMap.toDTO(user);

        response.json(userDTO);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
    return null;
});

export default usersRouter;
