import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { User } from './schema/user.schema';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body() signUpDto: SignUpDto,
  ): Promise<{ token: string; roleToken: string }> {
    return this.authService.signUp(signUpDto);
  }

  @Post('/login')
  login(
    @Body() loginDto: LoginDto,
  ): Promise<{ token: string; roleToken: string }> {
    return this.authService.login(loginDto);
  }

  @Get('get_user/:id')
  getUser(
    @Param('id')
    id: string,
  ): Promise<User> {
    const user = this.authService.getUserById(id);
    return user;
  }
}
