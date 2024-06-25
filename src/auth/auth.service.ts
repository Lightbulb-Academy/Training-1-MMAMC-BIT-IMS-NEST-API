import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly jwtService: JwtService,
    ) {}

    async login(loginDto: LoginDto): Promise<{ token: string }> {
        const user = await this.prismaService.user
            .findUnique({ where: { email: loginDto.email } });

        if (!user) {
            throw new NotFoundException('user does not exist.');
        }

        if (!await compare(loginDto.password, user.password)) {
            throw new UnauthorizedException('Invalid Credentials!');
        }

        return {
            token: await this.jwtService.signAsync(user, {
                secret: process.env.JWT_SECRET,
            }),
        };
    }
}
