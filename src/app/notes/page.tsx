import NavBar from "../components/NavBar";

export default function Notes() {
  return (
    <main className="flex flex-col items-center">
      <NavBar />

      <section className="px-auto flex w-full max-w-3/4 flex-col gap-6 py-32 text-justify text-lg md:max-w-3xl md:items-start md:text-xl">
        <h1 className="text-3xl font-bold md:text-6xl">Notes</h1>

        <div className="mt-4 text-gray-400">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim aliquam a vel veniam
            voluptatem in numquam fugit ducimus tempora vitae eaque id, quisquam consequatur odio,
            ipsa assumenda perspiciatis harum dignissimos. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repellat dicta debitis eius beatae, hic cum tenetur modi nostrum ex
            consequatur? Ad architecto quibusdam corporis tempora cumque tenetur alias ipsum odio!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero obcaecati labore ab
            repellat, et sunt ipsum neque cupiditate cum laboriosam mollitia accusamus eligendi
            facilis dolore! Culpa praesentium ducimus quibusdam molestias!
          </p>
        </div>
      </section>
    </main>
  );
}
