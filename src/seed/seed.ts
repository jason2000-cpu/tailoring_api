import dotenv from "dotenv";
import { Role } from ".prisma/client";
import prisma from "../prisma/prismaClient";
import { hashPassword } from "../utils/authUtils";

dotenv.config();

async function main() {
  const email = process.env.SEED_ADMIN_EMAIL?.trim();
  const password = process.env.SEED_ADMIN_PASSWORD;
  const Fname = process.env.SEED_ADMIN_FIRST_NAME?.trim() || "Admin";
  const Sname = process.env.SEED_ADMIN_LAST_NAME?.trim() || "User";

  const userEmail = process.env.SEED_USER_EMAIL?.trim();
  const userPassword = process.env.SEED_USER_PASSWORD;
  const userFname = process.env.SEED_USER_FIRST_NAME?.trim() || "Tailor";
  const userSname = process.env.SEED_USER_LAST_NAME?.trim() || "User";


  if (!email || !password || !userEmail || !userPassword) {
    console.error(
      "Set SEED_ADMIN_EMAIL and SEED_ADMIN_PASSWORD in the environment (e.g. Backend/.env) before running the seed."
    );
    process.exit(1);
  }

  const hashedPassword = await hashPassword(password);
  const hashedUserPassword = await hashPassword(userPassword);

  // Create Admin
  await prisma.users.upsert({
    where: { email },
    update: {
      password: hashedPassword,
      role: Role.ADMIN,
      Fname,
      Sname,
    },
    create: {
      email,
      password: hashedPassword,
      Fname,
      Sname,
      role: Role.ADMIN,
    },
  });

  console.log(`Admin user ready: ${email}`);


  // Create User
  const user = await prisma.users.upsert({
    where: { email: userEmail },
    update: {
      password: userPassword,
      role: Role.ADMIN,
      Fname: userFname,
      Sname: userSname,
    },
    create: {
      email: userEmail!,
      password: hashedUserPassword,
      Fname: userFname,
      Sname: userSname,
      role: Role.USER,
    },
  });

   console.log(`Tailor user ready: ${userEmail}`);

   // Create business
  await prisma.businesses.upsert({
    where: { userId: user.id },
    update: {
        name:"Bespoke Fashions",
        email:"bespokeg@gmail.com",
        phone:"+254797955092",
        address:"Nairobi, Kenya",
        logo:"/static/images/Vector.png"
    },
    create: {
        userId: user.id,
        name:"Bespoke Fashions",
        email:"bespokeg@gmail.com",
        phone:"+254797955092",
        address:"Nairobi, Kenya",
        logo:"/static/images/Vector.png"
    },
  });

  console.log(`Business Bespoke Fashions Created`)
}



main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });