import AppDataSource from "../data-source";
import { UserEntity } from "../entities/UserEntity";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
class UserService {
  private userRepository = AppDataSource.getRepository(UserEntity);

  async getAll() {
    console.log("UserService");    
    return this.userRepository.find();
  }
  async getById(id: number) {
    console.log("UserService");
    return this.userRepository.findOneBy({ id: id });
  }
  async signup(email: string, password: string) {
    console.log("UserService");
    const hashPassword = await bcrypt.hash(password, 10);

    const userToCreate: UserEntity = {email, password: hashPassword}
    const newUser = this.userRepository.create(userToCreate);

    return this.userRepository.save(newUser);
  }

  async login(email: string, password: string){
    console.log("UserServiceLogin");
    
    const user = await this.userRepository.findOneBy({ email: email });
    if(!user){
      return null;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password!);

    if(!isPasswordValid){
      return null;
    }
    const token = jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET as string, {expiresIn: "4h"});
    
    return token
  }

  async update(id: string, user: UserEntity) {
    console.log("UserService");
    return this.userRepository.update(id, user);
  }

  async delete(id: string) {
    console.log("UserService");
    const user = this.userRepository.findOneBy({ id: +id });
    return this.userRepository.delete(id);
  }
}

export default UserService;
