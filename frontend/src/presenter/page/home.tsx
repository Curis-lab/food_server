import { useState } from "react";

function Home() {
  const [input, setInput] = useState<{question:string, type:string}>({question:'',type:'name'});
  const handler = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setInput({...input, question: e.target.value})
  }
  return (
    <div>
      <input type="text" placeholder="Search...." onChange={handler} />
      <button>Name</button>
      <button>category</button>
      <button>foodType</button>
    </div>
  );
}

export default Home;
