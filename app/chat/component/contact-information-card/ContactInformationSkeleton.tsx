import { Button } from "~/components/ui/button";

const ContactInformationSkeleton = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col items-center pb-6 border-b">
        <div className="h-20 w-20 rounded-full bg-gray-200 animate-pulse"></div>
        <h3 className="font-semibold text-lg text-gray-400 animate-pulse">
          <div className="h-4 w-24 rounded-full bg-gray-200 animate-pulse"></div>
        </h3>
        <p className="text-sm text-gray-400 animate-pulse">
          <div className="h-2 w-16 rounded-full bg-gray-200 animate-pulse"></div>
        </p>
        <div className="flex items-center mt-1">
          <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse mr-1"></div>
          <div className="h-2 w-8 rounded-full bg-gray-200 animate-pulse"></div>
        </div>
      </div>

      <div className="py-4 space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-2 text-gray-400 animate-pulse">
            <div className="h-4 w-24 rounded-full bg-gray-200 animate-pulse"></div>
          </h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <div className="h-2 w-12 rounded-full bg-gray-200 animate-pulse"></div>
              <div className="h-2 w-12 rounded-full bg-gray-200 animate-pulse"></div>
            </div>
            <div className="flex justify-between text-sm">
              <div className="h-2 w-12 rounded-full bg-gray-200 animate-pulse"></div>
              <div className="h-2 w-12 rounded-full bg-gray-200 animate-pulse"></div>
            </div>
            <div className="flex justify-between text-sm">
              <div className="h-2 w-12 rounded-full bg-gray-200 animate-pulse"></div>
              <div className="h-2 w-12 rounded-full bg-gray-200 animate-pulse"></div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2 text-gray-400 animate-pulse">
            <div className="h-4 w-24 rounded-full bg-gray-200 animate-pulse"></div>
          </h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <div className="h-2 w-12 rounded-full bg-gray-200 animate-pulse"></div>
              <div className="h-2 w-12 rounded-full bg-gray-200 animate-pulse"></div>
            </div>
            <div className="flex justify-between text-sm">
              <div className="h-2 w-12 rounded-full bg-gray-200 animate-pulse"></div>
              <div className="h-2 w-12 rounded-full bg-gray-200 animate-pulse"></div>
            </div>
            <div className="flex justify-between text-sm">
              <div className="h-2 w-12 rounded-full bg-gray-200 animate-pulse"></div>
              <div className="h-2 w-12 rounded-full bg-gray-200 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t">
        <div className="h-8 w-full rounded-full bg-gray-200 animate-pulse"></div>
      </div>
    </div>
  );
};

export default ContactInformationSkeleton;
