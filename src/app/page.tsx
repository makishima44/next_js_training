import Button from "@/component/button/Button";

export default function Home() {
  return (
    <div className={"h-screen w-full flex justify-center items-center"}>
      <Button>Open</Button>
      <Button variant='secondary'>Open</Button>
    </div>
  );
}
