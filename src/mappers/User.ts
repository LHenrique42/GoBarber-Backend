import User from '../models/User';

interface UserDTO {
    id: string;
    name: string;
    email: string;
    avatar: string;
}

export default class UserMap {
    /*     public static toDomain(): any {}

    public static toPersistence(): User {} */

    public static toDTO(user: User): UserDTO {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
        };
    }
}
