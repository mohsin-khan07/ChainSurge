/* eslint-disable react/prop-types */

function AddOverviewCard({ title, value }) {
  return (
    <div className="flex flex-col xs:flex-row justify-between text-lg">
      <span>{title}</span>
      <span className="text-ellipsis overflow-hidden xs:text-right text-primary font-medium">
        {value}
      </span>
    </div>
  );
}

export default AddOverviewCard;
