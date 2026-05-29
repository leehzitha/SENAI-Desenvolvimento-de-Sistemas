import { registerUserDTO } from "../dtos/userDTO";

export const registerUser = async (data: registerUserDTO) => {
    const { name, email, password, birth_date} = data
}