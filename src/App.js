/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { AppInput } from "./components/AppInput";

function App() {
  const emptyAddress = "0x0000000000000000000000000000000000000000";
  const [text, setText] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const hexText = Number(text).toString(16);
    const hexAddress =
      emptyAddress.substring(0, emptyAddress.length - hexText.length) + hexText;
    setAddress(hexAddress);
  }, [text]);

  return (
    <div className="flex flex-col items-center gap-8 w-96 mx-auto px-4">
      <div className="pt-8">
        <h1 className="text-3xl font-bold">Number2Address</h1>
      </div>
      <div className="w-full">
        <AppInput
          type="number"
          label="Number input"
          placeholder="...123"
          className="text-right"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="flex flex-col items-center font-bold gap-2">
        <span>Output</span>
        <span>
          <a
            href="#"
            className="text-blue-900"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText(address);
            }}
          >
            {address}
          </a>
        </span>
      </div>
    </div>
  );
}

export default App;
