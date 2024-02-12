import Image from "next/image";
import Checkbox from "./Checkbox";
import { useAppSelector } from "@/lib/redux/hooks";

const Option = (props: any) => {
  const searchTerm = useAppSelector((state) => state.search.searchTerm);
  const { innerProps, innerRef, isSelected } = props;

  const boldedValue = props.data.title.replace(
    new RegExp(`(${searchTerm})`, "gi"),
    "<strong class='font-bold'>$1</strong>"
  );

  return (
    <article
      ref={innerRef}
      {...innerProps}
      className={`px-4 py-2 flex items-center gap-3 border-b border-gray-400 cursor-pointer ${
        props.isFocused ? "bg-gray-200" : ""
      }`}
    >
      <Checkbox id="option" checked={isSelected} />

      <div className="w-12 h-12 rounded-lg">
        <Image
          src={props.data.image}
          alt={props.data.title}
          className="rounded-lg h-full"
          width={48}
          height={48}
        />
      </div>
      <div className="flex flex-col">
        <div className="text-gray-700 font-medium text-lg">
          <div dangerouslySetInnerHTML={{ __html: boldedValue }} />
        </div>
        <div className="text-gray-700 text-base">{props.data.subTitle}</div>
      </div>
    </article>
  );
};

export default Option;
