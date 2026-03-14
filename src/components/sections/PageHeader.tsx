import Container from "@/components/layout/Container";

export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="pt-16 pb-10">
      <Container>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-base text-neutral-600">
            {subtitle}
          </p>
        ) : null}
      </Container>
    </div>
  );
}
