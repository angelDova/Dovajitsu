// "use client";

// import { Category } from "@prisma/client";
// import { FaHeadSideVirus } from "react-icons/fa";
// import { TbPlaystationTriangle } from "react-icons/tb";
// import { GiArmSling, GiGuillotine, GiBlackBelt } from "react-icons/gi";
// import { BiConfused } from "react-icons/bi";
// import { IconType } from "react-icons";
// import { CategoryItem } from "./category-item";

// interface CategoriesProps {
//   items: Category[];
// }

// const iconMap: Record<Category["name"], IconType> = {
//   "Art of the Triangle": TbPlaystationTriangle,
//   "Coach, What do I do from 50,50?": BiConfused,
//   "All Aspects of the Armbar": GiArmSling,
//   "Guillotine Mastery": GiGuillotine,
//   "Front Headlocks": FaHeadSideVirus,
//   "All Access Dojo Membership/Month": GiBlackBelt,
//   "All Access Dojo Membership/Year": GiBlackBelt,
// };

// export const Categories = ({ items }: CategoriesProps) => {
//   return (
//     <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
//       {items.map((item) => (
//         <CategoryItem
//           key={item.id}
//           label={item.name}
//           icon={iconMap[item.name]}
//           value={item.id}
//         />
//       ))}
//     </div>
//   );
// };

"use client";

import { Category } from "@prisma/client";
import {
  FcEngineering,
  FcFilmReel,
  FcMultipleDevices,
  FcMusic,
  FcOldTimeCamera,
  FcSalesPerformance,
  FcSportsMode,
} from "react-icons/fc";
import { GiBlackBelt } from "react-icons/gi";
import { IconType } from "react-icons";

import { CategoryItem } from "./category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  "Art of the Triangle": FcMusic,
  "All Aspects of the Armbar": FcSportsMode,
  "Guillotine Mastery": FcSalesPerformance,
  "Coach, What do I do from 50/50?": FcOldTimeCamera,
  "Front Headlocks": FcMultipleDevices,
  "All Access Dojo Membership/Year": FcFilmReel,
  "All Access Dojo Membership/Month": FcEngineering,
};

export const Categories = ({ items }: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-4">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  );
};
