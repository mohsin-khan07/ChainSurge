/* eslint-disable react/prop-types */

function OverviewElement({ imgSrc, title, value }) {
  return (
    <div className="flex justify-between gap-3 txns:gap-5 items-center py-5">
      <img src={imgSrc} alt="icon" className="w-6 h-6" />
      <div className="flex justify-between gap-2 w-full text-base txns:text-lg">
        <span className="text-dark2 uppercase">{title}</span>
        <span className="font-medium text-right text-primary">{value}</span>
      </div>
    </div>
  );
}

export default OverviewElement;
