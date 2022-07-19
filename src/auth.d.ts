import { User } from '@prisma/client';
import { Session } from 'next-auth';

declare module 'next-auth' {

    type Session = {
        expires: string
        user: User
    };

    type DefaultSession = Session;
    type DefaultUser = User;

}