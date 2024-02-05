/* eslint-disable react/prop-types */

function PageTitle({ title, value }) {
  return (
    <div className="mb-8 text-center text-2xl">
      <span className="font-medium">{title} </span>
      <span className="font-light text-dark2">#{value}</span>
    </div>
  );
}

export default PageTitle;
