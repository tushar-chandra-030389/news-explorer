import LogoutButton from "molecules/LogoutButton";

export default function News() {
  return (
    <div className="flex justify-center	items-center">
      <div className="w-full sm:w-96 xl:w-96 h-96 bg-neutral-50 rounded-md mt-20">
        {"News"}
        <LogoutButton />
      </div>
    </div>
  );
}
