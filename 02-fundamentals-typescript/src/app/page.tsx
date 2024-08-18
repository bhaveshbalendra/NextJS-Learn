// interface PropType {
//   surname: string;
// }
// const Page = (props: PropType):JSX.Element => {
//   return <h1>Hello</h1>;
// };

// interface PropType {
//   surname: string;
//   age: number;
//   greet: () => void;
//   movies: { movieName: string; releaseDate: number }[];
//   status: "loading" | "success" | "error";
//   // children: string; for the simple string
//   children: React.ReactNode; // for other component passed as prop
// }

// const Page = (props: PropType): JSX.Element => {
//   function handleClick() {
//     console.log("hello");
//   }

//   return (
//     <h1>
//       Hello{props.surname}
//       {props.children}
//     </h1>
//   );
// };

// interface HandelEvent {
//   handleClick: () => void;
//   handleClickWithEvent?: (e: React.MouseEvent<HTMLButtonElement>) => void;
//   handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   styles: React.CSSProperties;
// }
// const Page = (props: HandelEvent): JSX.Element => {
//   const handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ): void => {
//     console.log(e);
//   };
//   return <button onClick={props.handleClick}>hi</button>;
// };

// const Page: React.FC<{ params: Params }> = function Page({ params }) {
//   return <h1>Hello</h1>;
// };

const Page = (): JSX.Element => {
  return <h1>Hello</h1>;
};
export default Page;
