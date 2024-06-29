import MidTitle from "./MidTitle";
import Text from "./Text";
import Link from "next/link";
import Image from "next/image";
import Tag from "./Tag";
import Toggle from "./Toggle";

export default function Card({ title, description, bgColor, link, linkText, image, tags = [], roleDescription,icon }) {
  return (
    <div className={`w-full flex flex-col gap-5 p-2 ${bgColor ? `bg-${bgColor}` : ''} ${bgColor ? `border border-${bgColor}` : 'border'}`}>
      <div className="flex">
      {icon && (
          <Image src={icon} alt="icon" width={24} height={24} className="mr-2" />
        )}
      <MidTitle>{title}</MidTitle>
      </div>
      {image && (
        <div className="relative w-full h-80">
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </div>
      )}
      <Text>{description}</Text>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Tag key={index} bgColor={tag.bgColor} textColor={tag.textColor}>
            {tag.label}
          </Tag>
        ))}
      </div>
      {roleDescription && (   
      <Toggle label="담당 구현 기능 보기">
        <Text>{roleDescription}</Text>
      </Toggle>
     )}
      {link && (
        <Link href={link} className={`underline ${bgColor === 'mint' ? 'text-white' : 'text-orange'}`}>
          <MidTitle>{linkText}</MidTitle>
        </Link>
      )}
     
    </div>
  );
}
