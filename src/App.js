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
      <div>
        Helper links:
        <a
          href="https://en.wikipedia.org/wiki/ISO_4217"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-900 font-bold"
        >
          <div className="flex">
            <span>Fiat currencies ISO4217</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;
