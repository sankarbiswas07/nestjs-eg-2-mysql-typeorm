import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UpdateUserDto } from 'src/users/dtos/UpdateUserDto.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(
        private userService: UsersService
    ) { }


    @Get()
    async fetchUsers() {
        const users = await this.userService.fetchAllUsers()
        return users
    }


    @Get(':id')
    async fetchUser(@Param('id', ParseIntPipe) id: number) {
        const user = await this.userService.fetchUserBy(id)
        return user
    }

    @Delete(':id')
    async deleteUser(@Param('id', ParseIntPipe) id: number) {
        const user = await this.userService.deleteUserBy(id)
        return user
    }


    @Post('create')
    createUsers(@Body() createUserDto: CreateUserDto) {
        this.userService.createUser(createUserDto)
    }


    @Put(':id')
    async updateUser(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateUserDto: UpdateUserDto
    ) {
        await this.userService.updateUser(id, updateUserDto);
    }
}
