import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import * as bcrypt from 'bcryptjs';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt/dist';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(
    signUpDto: SignUpDto,
  ): Promise<{ token: string; roleToken: string }> {
    const { full_name, name, email, role, password } = signUpDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userModel.create({
      full_name,
      name,
      email,
      role,
      password: hashedPassword,
    });

    const token = this.jwtService.sign({ id: user._id });
    const roleToken = this.jwtService.sign({ role: user.role });

    return {
      token,
      roleToken,
    };
  }

  async getUserById(id: string) : Promise<User> {
    return await this.userModel.findById(id);
  }

  async login(
    loginDto: LoginDto,
  ): Promise<{ token: string; roleToken: string }> {
    const { email, password } = loginDto;
    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const token = this.jwtService.sign({ id: user._id });
    const roleToken = this.jwtService.sign({ role: user.role });

    const decodedToken = this.jwtService.verify(roleToken, {
      secret: process.env.JWT_SECRET,
    });

    console.log(decodedToken);

    if (decodedToken.role === 'Escritor') {
      console.log('O token corresponde a um escritor.');
    } else {
      console.log('O token não corresponde a um escritor.');
    }

    return {
      token,
      roleToken,
    };
  }
}
