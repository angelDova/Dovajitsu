"use client";

import axios from "axios";
import { Trash } from "lucide-react";
import { useState } from "react";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ConfirmModal } from "@/components/modals/confirm-modal";
// import { useConfettiStore } from "@/hooks/use-confetti-store";
import { toast } from "sonner";

interface ActionsProps {
  disabled: boolean;
  courseId: string;
  isPublished: boolean;
}

export const Actions = ({ disabled, courseId, isPublished }: ActionsProps) => {
  const router = useRouter();
  //   const confetti = useConfettiStore();
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      if (isPublished) {
        await axios.patch(`/api/courses/${courseId}/unpublish`);
        toast.success("Course unpublished", {
          position: "top-center",
        });
      } else {
        await axios.patch(`/api/courses/${courseId}/publish`);
        const promise = () =>
          new Promise((resolve) => setTimeout(resolve, 2000));

        toast.promise(promise, {
          loading: "Loading...",
          success: () => {
            return "Course published 🚀";
          },
          position: "top-center",
          error: "Error",
        });
        // confetti.onOpen();
      }

      router.refresh();
    } catch {
      toast.error("Something went wrong", {
        position: "top-center",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setIsLoading(true);

      await axios.delete(`/api/courses/${courseId}`);

      const promise = () => new Promise((resolve) => setTimeout(resolve, 2000));

      toast.promise(promise, {
        loading: "Loading...",
        success: (data) => {
          return "Course deleted ";
        },
        position: "top-center",
        error: "Error",
      });
      router.refresh();
      router.push(`/dashboard/teacher/courses`);
    } catch {
      toast.error("Something went wrong", {
        position: "top-center",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-x-2">
      <Button
        onClick={onClick}
        disabled={disabled || isLoading}
        variant="outline"
        size="sm"
      >
        {isPublished ? "Unpublish" : "Publish"}
      </Button>
      <ConfirmModal onConfirm={onDelete}>
        <Button size="sm" disabled={isLoading}>
          <Trash className="h-4 w-4" />
        </Button>
      </ConfirmModal>
    </div>
  );
};
