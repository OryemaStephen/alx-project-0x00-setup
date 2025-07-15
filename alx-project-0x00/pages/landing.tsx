import Button from "@/components/Button";
import Card from "@/components/Card";
import React from "react";

const Landing: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Card />
      <div className="flex flex-col items-center gap-4">
        <Button
          title="Small Round Button"
          size="small"
          shape="rounded-full"
          onClick={() => alert("Small round button was pressed!")}
          styles="mt-4 bg-purple-600 hover:bg-purple-700"
        />
         <Button
          title="Medium Round Button"
          size="medium"
          shape="rounded-full"
          onClick={() => alert("Medium round button was pressed!")}
          styles="mt-4 bg-purple-600 hover:bg-purple-700"
        />
         <Button
          title="Large Round Button"
          size="large"
          shape="rounded-full"
          onClick={() => alert("Large round button was pressed!")}
          styles="mt-4 bg-purple-600 hover:bg-purple-700"
        />
      </div>
    </div>
  );
};

export default Landing;