import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";

import { db } from "@/lib/db";

import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const CoursesPage = async () => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const courses = await db.course.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="p-6">
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={courses} />
      </div>
    </div>
  );
};

export default CoursesPage;
