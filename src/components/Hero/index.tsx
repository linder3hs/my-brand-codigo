import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-5">
      <h1 className="text-5xl text-center font-semibold">I am Linder,</h1>
      <h2 className="text-5xl text-center font-semibold">
        {" "}
        Senior Software Developer
      </h2>
      <Image
        src="https://avatars.githubusercontent.com/u/20673011?v=4"
        alt=""
        className="rounded-full"
        width={200}
        height={400}
      />
    </section>
  );
}
