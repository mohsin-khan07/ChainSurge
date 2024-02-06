/* eslint-disable react/prop-types */

function PageTitle({ title, value }) {
  return (
    <div className="mb-8 text-center text-ellipsis overflow-hidden text-sm xs:text-lg sm:text-2xl text-wrap">
      <span className="font-medium">{title} </span>
      <span className="font-light text-dark2">#{value}</span>
    </div>
  );
}

export default PageTitle;
