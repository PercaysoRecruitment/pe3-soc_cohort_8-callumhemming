import { FcSearch } from "react-icons/fc";

interface Props {
  onClick: any;
}

export default function SendButton({ onClick }: Props): JSX.Element {
  return (
    <>
      <div onClick={onClick}>
        <FcSearch />
      </div>
    </>
  );
}
