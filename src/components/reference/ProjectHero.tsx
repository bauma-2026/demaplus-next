import Container from "@/components/layout/Container";

type Props = {
  title: string;
  excerpt?: string;
  featuredImage?: string | null;
};

export default function ProjectHero({ title, excerpt, featuredImage }: Props) {
  return (
    <div className="pt-16 pb-12">
      <Container>
        {featuredImage ? (
          <div className="mb-14">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-neutral-100">
         <img
  src={featuredImage}
  alt={title}
  className="h-full w-full object-cover"
  loading="eager"
  decoding="async"
  fetchPriority="high"
/>
            </div>
          </div>
        ) : null}

        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            {title}
          </h1>

          {excerpt ? (
            <p className="mt-6 max-w-2xl text-base text-neutral-600">
              {excerpt}
            </p>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
