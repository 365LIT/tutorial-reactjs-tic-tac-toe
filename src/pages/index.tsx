// import Square from "@/components/Square";
import Board from "@/components/Board";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <Square /> */}
      <Board />
    </>
  );
}
