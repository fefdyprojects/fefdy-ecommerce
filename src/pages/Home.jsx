import PrimaryButton from "../Components/Ui/PrimaryButton";
export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <PrimaryButton title='View more' redirect={true} redirectPath='/categories'/>
    </>
  );
}
