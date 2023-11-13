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
import { TbPlaystationTriangle } from "react-icons/tb";
import { GiArmSling } from "react-icons/gi";
import { IconType } from "react-icons";
import { CategoryItem } from "./cateogry-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  "Art of the Triangle": TbPlaystationTriangle,
  "Coach, What do I do from 50,50?": FcOldTimeCamera,
  "All Aspects of the Armbar": GiArmSling,
  "Guillotine Mastery": FcSalesPerformance,
  "Front Headlocks": FcEngineering,
  "All Access Dojo Membership/Month": FcFilmReel,
  "All Access Dojo Membership/Year": FcMultipleDevices,
};

export const Categories = ({ items }: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
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
