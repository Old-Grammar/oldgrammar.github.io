import Image from "next/image";

export default function RootPage() {

  return (
    <article className="bg-[#231c1c] text-primary-50 min-h-full px-0.5 flex flex-col">
      <h1 className="font-serif font-semibold text-4xl sm:text-7xl uppercase text-primary-600">
        Old Grammar
      </h1>
      <ul className="space-y-3 text-2xl sm:text-4xl text-right sm:text-left">
        <li>Fashion</li>
        <li>Hip Hop</li>
        <li>Tech</li>
      </ul>

      <div className="my-12 font-serif font-semibold text-2xl sm:text-4xl uppercase md:mx-auto">
        <h3>
          Since <span className="text-primary-600">2015</span>
        </h3>
        <p>
          Working on a new perspective for 2025.
        </p>
        <div className="pt-6 space-y-3 normal-case font-normal">
          <h4>In the meantime, check out our other work:</h4>
          <ul className="font-sans">
            <li>
              <a href="https://maybebrunch.ing" className="underline underline-offset-2">Maybe Brunch</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-auto">
        <div className="md:max-w-3xl mx-auto max-w-sm">
          <Image
            src="/Old-Grammar-dark.png"
            width={849}
            height={741}
            alt="Old Grammar logo"
            priority
            quality={100}
            className="object-contain"
          />
        </div>
      </div>
    </article>
  );
}
