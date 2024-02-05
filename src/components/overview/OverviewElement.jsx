/* eslint-disable react/prop-types */

function OverviewElement({ imgSrc, title, value }) {
  return (
    <div className="flex justify-between gap-5 items-center py-5">
      <img src={imgSrc} alt="icon" className="w-6 h-6" />
      <div className="flex justify-between w-full text-lg">
        <span className="text-xl uppercase">{title}</span>
        <span className="font-medium text-right text-primary">{value}</span>
      </div>
    </div>
  );
}

export default OverviewElement;
