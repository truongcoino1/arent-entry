type Props = {
  title: string;
  url: string;
};
function FoodItem(props: Props) {
  const { title, url } = props;
  return (
    <div className="w-full relative h-[241px]">
      <img className="w-full h-full object-cover" src={url} alt="food" />
      <span className="w-[120px] h-[32px] bg-primary-300 absolute bottom-0 left-0 font-inter text-[15px] text-white flex justify-center items-center">
        {title}
      </span>
    </div>
  );
}

export default FoodItem;
