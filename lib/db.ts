import { PrismaClient } from "@prisma/client";

// This declares a global variable named prisma with the type PrismaClient or undefined. The global scope allows this variable to be accessed throughout the entire application.
declare global {
  var prisma: PrismaClient | undefined;
}

// This exports a constant named db. It checks if globalThis.prisma is defined; if it is, it uses that instance, otherwise, it creates a new instance of the PrismaClient. This ensures that only one instance of the Prisma client is created and shared across the application.
export const db = globalThis.prisma || new PrismaClient();

// In a non-production environment, this assigns the db instance to globalThis.prisma. This is done to enable hot-reloading in development, ensuring that changes to the Prisma client are reflected immediately without requiring a server restart.
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
