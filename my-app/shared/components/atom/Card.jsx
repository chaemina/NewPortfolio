import MidTitle from "./MidTitle";
import Text from "./Text";
import Link from "next/link";

export default function Card({ title, description, bgColor, link, linkText}) {
  return (
    <div className={`w-full flex flex-col gap-5 p-2 ${bgColor ? `bg-${bgColor}` : ''} ${bgColor ? `border border-${bgColor}` : ''}`}>
      <MidTitle>{title}</MidTitle>
      <Text>{description}</Text>
      {link && (
        <Link href={link} className={`underline ${bgColor === 'mint' ? 'text-white' : 'text-orange'}`}>
          <MidTitle>{linkText}</MidTitle>
        </Link>
      )}
    </div>
  );
}
