/* eslint-disable react/prop-types */

function DetailsRow({ title, value }) {
  return (
    <div className="flex flex-col xs:flex-row py-4 gap-2 xs:gap-5">
      <span className="text-dark2 xs:w-1/4">{title}:</span>
      <span className="xs:w-3/4 text-ellipsis overflow-hidden ...">
        {value}
      </span>
    </div>
  );
}

export default DetailsRow;
