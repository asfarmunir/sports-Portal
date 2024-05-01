"use client";
import { SessionProvider } from "next-auth/react";
import io from 'socket.io-client'
export const socket = io(process.env.NEXT_PUBLIC_SOCKET_SERVER_URL);

const AuthSessionProvider = ({ children }) => {


  console.log('url....',process.env.NEXT_PUBLIC_SOCKET_SERVER_URL);
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthSessionProvider;