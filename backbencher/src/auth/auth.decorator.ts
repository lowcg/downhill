import {
  ExecutionContext,
  UseGuards,
  applyDecorators,
  createParamDecorator,
} from '@nestjs/common';
import { LocalAuthGuard } from './auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { User } from 'src/user/user.entity';

export const Auth = () =>
  applyDecorators(UseGuards(LocalAuthGuard), ApiBearerAuth());

export const UseUser = createParamDecorator(
  (data: keyof User | undefined, ctx: ExecutionContext) => {
    const user = ctx.switchToHttp().getRequest().user;
    return data ? user[data] : user;
  },
);
