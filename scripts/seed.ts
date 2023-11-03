const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        {
          name: "Art of the Triangle",
        },
        {
          name: "Coach, What do I do from 50,50?",
        },
        {
          name: "All Aspects of the Armbar",
        },
        {
          name: "Guillotine Mastery",
        },
        {
          name: "All Access Dojo Membership/Year",
        },
        {
          name: "All Access Dojo Membership/Month",
        },
      ],
    });
    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();
