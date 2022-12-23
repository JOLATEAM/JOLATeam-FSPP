import { useEffect } from "react";

export default function Reviews(props) {
  const { reviews } = props;

  useEffect(() => {
    // VIRTUAL DOM
    const importFlowbiteFunc = function (flowbitePathStr) {
      const flowbiteScriptEl = document.createElement("script");
      flowbiteScriptEl.setAttribute("src", flowbitePathStr);
      document.body.appendChild(flowbiteScriptEl);
    };
    importFlowbiteFunc("https://unpkg.com/flowbite@1.5.4/dist/flowbite.js"); // here goes your path to a local flowbite.js you want to import
  }, []);
  
  console.log(reviews)

  return (
    
    <></>
  );
}
