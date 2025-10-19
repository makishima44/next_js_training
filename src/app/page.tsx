import Button from "@/component/button/Button";

export default function Home() {
  return (
    <div className={"h-screen w-full flex justify-center items-center"}>
      <Button variant='primary' disabled={true}>
        Open
      </Button>
    </div>
  );
}
