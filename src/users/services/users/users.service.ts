import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { CreateUserParams, UpdateUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
    ) { }


    async fetchAllUsers() {
        return this.userRepository.find()
    }

    async fetchUserBy(id: number) {
        return this.userRepository.findOneBy({ id })
    }

    async deleteUserBy(id: number) {
        return this.userRepository.delete({ id })
    }


    createUser(userDetails: CreateUserParams) {
        const newUser = this.userRepository.create({
            ...userDetails,
            createdAt: new Date()
        })

        return this.userRepository.save(newUser)
    }

    updateUser(id: number, updatedUserDetails: UpdateUserParams) {
        return this.userRepository.update({ id }, { ...updatedUserDetails });
    }
}
