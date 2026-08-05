const PinnedHealthSection = ({
  title,
  listBulletStyle,
  unorderedList,
  textColor,
  bgColor,
  bColor,
}: {
  title: string;
  listBulletStyle: string;
  unorderedList: string[];
  textColor: string;
  bgColor: string;
  bColor: string;
}) => {
  return (
    <div className="pb-3">
      <div className="text-slate-400 font-black text-[11px] uppercase mb-1">
        {title}
      </div>
      <div className="flex space-x-1" style={{ color: textColor }}>
        {unorderedList.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl px-3 flex justify-center items-center space-x-1"
            style={{ backgroundColor: bgColor, borderColor: bColor }}
          >
            <div className="text-[11px]">{listBulletStyle}</div>
            <p className="font-semibold text-[11px]">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PinnedHealthSection;
