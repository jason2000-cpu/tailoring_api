import dotenv from "dotenv";
import { Role, CompletionStatus } from "../generated/prisma";
import prisma from "../lib/prismaClient";
import { hashPassword } from "../utils/authUtils";
import synchronizeFinancialRecords from "../middleware/synchronizeFinancialRecords";

dotenv.config();

// Small date helper so all the "sample data" dates stay relative to today ---
function daysFromNow(offset: number): Date {
  const d = new Date();
  d.setHours(9, 0, 0, 0); // normalize time so day-based comparisons are clean
  d.setDate(d.getDate() + offset);
  return d;
}

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


  // Admin user

  try {
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
  } catch (e) {
    console.dir(e, { depth: null });
    throw e;
  }

  console.log(`Admin user ready: ${email}`);


  // Tailor user

  const user = await prisma.users.upsert({
    where: { email: userEmail },
    update: {
      password: hashedUserPassword,
      role: Role.USER,
      Fname: userFname,
      Sname: userSname,
    },
    create: {
      email: userEmail,
      password: hashedUserPassword,
      Fname: userFname,
      Sname: userSname,
      role: Role.USER,
    },
  });

  console.log(`Tailor user ready: ${userEmail}`);


  // Business

  const business = await prisma.businesses.upsert({
    where: { userId: user.id },
    update: {
      name: "Bespoke Fashions",
      email: "bespokeg@gmail.com",
      phone: "+254797955092",
      address: "Nairobi, Kenya",
      logo: "/static/images/Vector.png",
    },
    create: {
      userId: user.id,
      name: "Bespoke Fashions",
      email: "bespokeg@gmail.com",
      phone: "+254797955092",
      address: "Nairobi, Kenya",
      logo: "/static/images/Vector.png",
    },
  });

  console.log(`Business "Bespoke Fashions" ready (id: ${business.id})`);


  // Reset business-scoped + user-scoped data so the seed is re-runnable.
  //    Deleting Clients cascades to Measurements -> Orders -> Payments,
  //    per the onDelete: Cascade relations in the schema.

  await prisma.clients.deleteMany({ where: { businessId: business.id } });
  await prisma.income.deleteMany({ where: { businessId: business.id } });
  await prisma.expenses.deleteMany({ where: { businessId: business.id } });
  await prisma.financialRecord.deleteMany({ where: { businessId: business.id } });
  await prisma.notifications.deleteMany({ where: { userId: user.id } });
  await prisma.events.deleteMany({ where: { userId: user.id } });

  console.log("Cleared previous business/user-scoped sample data");


  // Clients, each with measurements and one or two orders + payments

  const clientsData = [
    {
      Fname: "Wanjiru",
      Sname: "Kamau",
      email: "wanjiru.kamau@gmail.com",
      phone: "+254701234501",
      activeOrder: true,
      measurements: { height: "165cm", shoulders: "40cm", hand: "58cm", chest: "92cm", waist: "76cm", hips: "98cm" },
      orders: [
        {
          item: "Wedding Gown",
          description: "Custom lace wedding gown with detachable train",
          collectionDate: daysFromNow(21),
          completionStatus: CompletionStatus.InProgress,
          payment: { paidAmount: 25000, totalAmount: 65000 },
        },
        {
          item: "Bridesmaid Dress Alteration",
          description: "Take in waist by 2cm, hem length",
          collectionDate: daysFromNow(-10),
          completionStatus: CompletionStatus.Complete,
          payment: { paidAmount: 3500, totalAmount: 3500 },
        },
      ],
    },
    {
      Fname: "Otieno",
      Sname: "Odhiambo",
      email: "otieno.odhiambo@yahoo.com",
      phone: "+254701234502",
      activeOrder: true,
      measurements: { height: "178cm", shoulders: "46cm", hand: "63cm", chest: "102cm", waist: "88cm", hips: "100cm" },
      orders: [
        {
          item: "Three-Piece Suit",
          description: "Charcoal grey wool suit, slim fit, for graduation",
          collectionDate: daysFromNow(14),
          completionStatus: CompletionStatus.InProgress,
          payment: { paidAmount: 15000, totalAmount: 38000 },
        },
      ],
    },
    {
      Fname: "Achieng",
      Sname: "Owuor",
      email: "achieng.owuor@gmail.com",
      phone: "+254701234503",
      activeOrder: false,
      measurements: { height: "160cm", shoulders: "38cm", hand: "55cm", chest: "88cm", waist: "70cm", hips: "94cm" },
      orders: [
        {
          item: "Ankara Dress",
          description: "Knee-length A-line dress, custom print",
          collectionDate: daysFromNow(-30),
          completionStatus: CompletionStatus.Complete,
          payment: { paidAmount: 6000, totalAmount: 6000 },
        },
      ],
    },
    {
      Fname: "Mutiso",
      Sname: "Kilonzo",
      email: null,
      phone: "+254701234504",
      activeOrder: true,
      measurements: { height: "172cm", shoulders: "44cm", hand: "60cm", chest: "96cm", waist: "82cm", hips: "97cm" },
      orders: [
        {
          item: "Office Blazer",
          description: "Navy blue blazer, two-button, notch lapel",
          collectionDate: daysFromNow(7),
          completionStatus: CompletionStatus.Pending,
          payment: { paidAmount: 0, totalAmount: 12000 },
        },
      ],
    },
    {
      Fname: "Naliaka",
      Sname: "Wafula",
      email: "naliaka.wafula@outlook.com",
      phone: "+254701234505",
      activeOrder: false,
      measurements: { height: "168cm", shoulders: "39cm", hand: "57cm", chest: "90cm", waist: "74cm", hips: "96cm" },
      orders: [
        {
          item: "Kitenge Two-Piece Set",
          description: "Matching top and skirt, custom embroidery",
          collectionDate: daysFromNow(-45),
          completionStatus: CompletionStatus.Complete,
          payment: { paidAmount: 8500, totalAmount: 8500 },
        },
      ],
    },
    {
      Fname: "Kiprotich",
      Sname: "Ruto",
      email: "kiprotich.ruto@gmail.com",
      phone: "+254701234506",
      activeOrder: true,
      measurements: { height: "180cm", shoulders: "47cm", hand: "64cm", chest: "104cm", waist: "90cm", hips: "102cm" },
      orders: [
        {
          item: "Tuxedo",
          description: "Black tuxedo with satin lapel, for corporate gala",
          collectionDate: daysFromNow(28),
          completionStatus: CompletionStatus.InProgress,
          payment: { paidAmount: 20000, totalAmount: 55000 },
        },
      ],
    },
    {
      Fname: "Chebet",
      Sname: "Kiplagat",
      email: "chebet.kiplagat@gmail.com",
      phone: "+254701234507",
      activeOrder: false,
      measurements: { height: "163cm", shoulders: "37cm", hand: "56cm", chest: "86cm", waist: "68cm", hips: "92cm" },
      orders: [
        {
          item: "School Uniform Set",
          description: "Pinafore and blouse, size adjustment for growth",
          collectionDate: daysFromNow(-60),
          completionStatus: CompletionStatus.Complete,
          payment: { paidAmount: 2800, totalAmount: 2800 },
        },
      ],
    },
    {
      Fname: "Mwangi",
      Sname: "Njoroge",
      email: "mwangi.njoroge@gmail.com",
      phone: "+254701234508",
      activeOrder: true,
      measurements: { height: "175cm", shoulders: "45cm", hand: "61cm", chest: "99cm", waist: "85cm", hips: "99cm" },
      orders: [
        {
          item: "Kaunda Suit",
          description: "Traditional Kaunda suit in cream linen",
          collectionDate: daysFromNow(3),
          completionStatus: CompletionStatus.InProgress,
          payment: { paidAmount: 9000, totalAmount: 22000 },
        },
        {
          item: "Shirt Alteration",
          description: "Sleeve shortening on 3 shirts",
          collectionDate: daysFromNow(-5),
          completionStatus: CompletionStatus.Complete,
          payment: { paidAmount: 1500, totalAmount: 1500 },
        },
      ],
    },
  ];

  for (const c of clientsData) {
    const client = await prisma.clients.upsert({
      where: { phone: c.phone },
      update: {
        Fname: c.Fname,
        Sname: c.Sname,
        email: c.email,
        businessId: business.id,
        activeOrder: c.activeOrder,
      },
      create: {
        Fname: c.Fname,
        Sname: c.Sname,
        email: c.email,
        phone: c.phone,
        businessId: business.id,
        activeOrder: c.activeOrder,
      },
    });

    await prisma.measurements.upsert({
      where: { clientId: client.id },
      update: c.measurements,
      create: {
        clientId: client.id,
        ...c.measurements,
      },
    });

    for (const o of c.orders) {
      const order = await prisma.orders.create({
        data: {
          item: o.item,
          description: o.description,
          collectionDate: o.collectionDate,
          completionStatus: o.completionStatus,
          businessId: business.id,
          clientId: client.id,
        },
      });

      await prisma.payments.create({
        data: {
          orderId: order.id,
          paidAmount: o.payment.paidAmount,
          totalAmount: o.payment.totalAmount,
        },
      });
    }
  }

  console.log(`Seeded ${clientsData.length} clients with measurements, orders, and payments`);


  // Income

  const incomeData = [
    { amount: 25000, description: "Deposit - Wedding Gown (Wanjiru Kamau)", createdAt: daysFromNow(-2), category: "Order Deposit" },
    { amount: 15000, description: "Deposit - Three-Piece Suit (Otieno Odhiambo)", createdAt: daysFromNow(-4), category: "Order Deposit" },
    { amount: 6000, description: "Full payment - Ankara Dress (Achieng Owuor)", createdAt: daysFromNow(-30), category: "Order Payment" },
    { amount: 8500, description: "Full payment - Kitenge Set (Naliaka Wafula)", createdAt: daysFromNow(-45), category: "Order Payment" },
    { amount: 20000, description: "Deposit - Tuxedo (Kiprotich Ruto)", createdAt: daysFromNow(-1), category: "Order Deposit" },
    { amount: 500, description: "Consultation fee - walk-in client", createdAt: daysFromNow(-3), category: "Consultation Fee" },
    { amount: 1500, description: "Full payment - Shirt Alteration (Mwangi Njoroge)", createdAt: daysFromNow(-5), category: "Alteration Fee" },
    { amount: 9000, description: "Deposit - Kaunda Suit (Mwangi Njoroge)", createdAt: daysFromNow(-6), category: "Order Deposit" },
  ];

  await prisma.income.createMany({
    data: incomeData.map((i) => ({ ...i, businessId: business.id })),
  });

  console.log(`Seeded ${incomeData.length} income records`);


  // Expenses

  const expensesData = [
    { amount: 18000, description: "Fabric bulk purchase - wool and cotton", createdAt: daysFromNow(-7), category: "Fabric Purchase" },
    { amount: 35000, description: "Workshop rent - July", createdAt: daysFromNow(-15), category: "Rent" },
    { amount: 4200, description: "Electricity and water bill", createdAt: daysFromNow(-10), category: "Utilities" },
    { amount: 12000, description: "Tailor assistant wages", createdAt: daysFromNow(-8), category: "Wages" },
    { amount: 6500, description: "Sewing machine servicing", createdAt: daysFromNow(-20), category: "Equipment Maintenance" },
    { amount: 3200, description: "Thread, buttons, and zippers restock", createdAt: daysFromNow(-12), category: "Supplies" },
  ];

  await prisma.expenses.createMany({
    data: expensesData.map((e) => ({ ...e, businessId: business.id })),
  });

  console.log(`Seeded ${expensesData.length} expense records`);

  //  Synchronize Financial records 

  await synchronizeFinancialRecords({ data: { businessId: business.id }})


  console.log(`Synchronized financial records`);

  // Notifications (for the tailor user)

  const notificationsData = [
    { read: false, type: "payment", message: "Deposit of Ksh 25,000 received from Wanjiru Kamau for Wedding Gown" },
    { read: false, type: "order", message: "New order created: Tuxedo for Kiprotich Ruto" },
    { read: true, type: "order", message: "Order completed: Ankara Dress for Achieng Owuor" },
    { read: true, type: "reminder", message: "Collection date for Shirt Alteration (Mwangi Njoroge) has passed" },
    { read: false, type: "payment", message: "Balance of Ksh 12,000 still due on Office Blazer (Mutiso Kilonzo)" },
  ];

  await prisma.notifications.createMany({
    data: notificationsData.map((n) => ({ ...n, userId: user.id })),
  });

  console.log(`Seeded ${notificationsData.length} notifications`);

  // Events (calendar entries for the tailor user)

  const eventsData = [
    {
      title: "Fitting - Wanjiru Kamau (Wedding Gown)",
      start: daysFromNow(5),
      end: daysFromNow(5),
      description: "First fitting session, bring lace samples",
    },
    {
      title: "Collection - Kaunda Suit (Mwangi Njoroge)",
      start: daysFromNow(3),
      end: daysFromNow(3),
      description: "Final collection and balance payment",
    },
    {
      title: "Fabric Supplier Visit",
      start: daysFromNow(2),
      end: daysFromNow(2),
      description: "Restock wool and cotton at Eastleigh market",
    },
    {
      title: "Fitting - Kiprotich Ruto (Tuxedo)",
      start: daysFromNow(10),
      end: daysFromNow(10),
      description: "Second fitting, check shoulder and sleeve length",
    },
  ];

  await prisma.events.createMany({
    data: eventsData.map((e) => ({ ...e, userId: user.id })),
  });

  console.log(`Seeded ${eventsData.length} events`);

  console.log("Seed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
