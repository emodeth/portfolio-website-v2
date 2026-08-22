import { Profile } from "@/lib/types";

const ProfileItem = ({ profile }: { profile: Profile }) => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <h1 className="whitespace-nowrap text-[16px] font-semibold leading-[22px] tracking-tight text-gray-1200">
            {profile.name}
          </h1>
          <p className="text-[16px] font-normal leading-[22px] text-muted-foreground">
            {profile.jobTitle}
          </p>
        </div>
      </div>
    </header>
  );
};

export default ProfileItem;
