import dynamic from "next/dynamic";
import type { Metadata } from "next";

const ExcalidrawWrapper = dynamic(
  async () => (await import("@/components/custom/excalidrawWrapper")).default,
  {
    ssr: false,
  }
);

type Props = {
  params: {
    id: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Problem | ${params.id}`,
  };
};

export default function Page({ params }: Props) {
  return (
    <>
      <div className="z-50">
        <ExcalidrawWrapper problemId={params.id} />
      </div>
    </>
  );
}