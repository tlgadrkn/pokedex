import React from "react";

const Pagination = () => {
  return (
    <ul className="flex list-reset border border-grey-light rounded font-sans my-4">
      <li>
        <a
          className="block hover:text-white hover:bg-blue text-blue border-r border-grey-light px-3 py-2"
          href="#"
        >
          Previous
        </a>
      </li>
      <li>
        <a
          className="block hover:text-white hover:bg-blue text-blue px-3 py-2"
          href="#"
        >
          Next
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
