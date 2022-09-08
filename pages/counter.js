import React, { useEffect, useState } from "react";

const Page = () => {
  return (
    <>
      <div className="container">
        <input
          onChange={(e) => setInput(e.target.value)}
          placeholder="name"
          type="text"
        />
      </div>
    </>
  );
};

export default Page;
