import { Body, Controller, Post, Res } from '@nestjs/common';

import express from 'express';

import { AuthService } from './auth.service';

import { LoginDto } from './dto/login.dto';
import { Get, Req, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body() body: LoginDto,
    @Res({ passthrough: true })
    res: express.Response,
  ) {
    const result = await this.authService.login(body.email, body.password);

    res.cookie('access_token', result.access_token, {
      httpOnly: true,

      secure: true,

      sameSite: 'none',

      path: '/',

      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    return {
      user: result.user,
    };
  }
  @UseGuards(JwtAuthGuard)
  @Get('me')
  getMe(@Req() req: any) {
    return req.user;
  }
}
