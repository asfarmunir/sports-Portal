"use client";
import { SessionProvider } from "next-auth/react";
import io from 'socket.io-client'
export const socket = io(process.env.NEXT_PUBLIC_SOCKET_SERVER_URL);

const AuthSessionProvider = ({ children }) => {

  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthSessionProvider;