/* eslint-disable react/prop-types */

function NavElement({ imgSrc, title, value }) {
  return (
    <div className="flex items-center gap-3">
      <img className="w-5 h-5" src={imgSrc} alt="Icon" />
      <span className="text-sm">{title}</span>
      <span className="text-sm font-medium text-right text-primary">
        {value}
      </span>
    </div>
  );
}

export default NavElement;
