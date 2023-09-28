import { useState } from 'react';



// export default function Square({ value, onSquareClick }: { value: string; onSquareClick: () => void;}) {
//   const [value, setValue] = useState<String | null> (null);
//   function handleClick() {
//     setValue('X');
//   }

//   return (
//     <button 
//     className="square"
//     onClick={handleClick}
//     >
//       {value}
//     </button>
//   );
// }

export default function Square({value}: {value: string}) {
  return <button className="square">{value}</button>;
}