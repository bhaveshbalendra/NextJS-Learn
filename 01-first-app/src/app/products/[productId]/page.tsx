import { Metadata } from "next";
import { resolve } from "path";
type Props = {
  params: {
    productId: string;
  };
};

// export const generateMetadata = ({ params }: Props): Metadata => {
//   return {
//     title: `Product ${params.productId}`,
//   };
// };

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

export default function Page({ params }: { params: { productId: string } }) {
  return <h1>product {params.productId}</h1>;
}
