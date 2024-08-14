import { lineSpinner } from "ldrs";

lineSpinner.register();

type LoaderProps = {
  size?: string;
  type?: string;
  className?: string;
  color?: string;
};

const Loader = ({
  size = "20",
  type,
  className,
  color = "black",
}: LoaderProps) => {
  return (
    <div
      className={` ${
        type === "fullscreen" ? "w-full h-screen fixed  top-0 left-0 " : ""
      }flex justify-center items-center z-[999999] ${className}}`}
    >
      <l-line-spinner
        size={size}
        stroke="3"
        speed="1.3"
        color={color}
      ></l-line-spinner>
    </div>
  );
};

export default Loader;
