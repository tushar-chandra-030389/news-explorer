import LogoutButton from "molecules/LogoutButton";

export default function Header() {
  return (
    <div className="flex p-2 border-b-2	border-primary">
      <div className="basis-10/12"></div>
      <div className="basis-2/12 flex flex-row-reverse">
        <LogoutButton />
      </div>
    </div>
  );
}
