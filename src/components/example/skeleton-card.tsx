import { Skeleton } from "@/components/ui/skeleton";

const SkeletonCard = () => {
  return (
    <div className="flex flex-col gap-3 rounded-lg border p-4 w-64">
      <Skeleton className="h-40 w-full rounded-md" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
};

export default SkeletonCard;
