import MidTitle from "./MidTitle";
import Text from "./Text";
import Link from "next/link";
import Image from "next/image";
import Tag from "./Tag";
import Toggle from "./Toggle";

export default function Card({ title, description, bgColor, link, link2, linkText2, linkText, image, tags = [], roleDescription,icon }) {
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
      <Toggle label="프로젝트 내 역할 보기 ">
        <span className="whitespace-pre-line leading-relaxed">{roleDescription}</span>
      </Toggle>
     )}
      {link && (
        <Link href={link} className={`underline ${bgColor === 'mint' ? 'text-white' : 'text-orange'}`}>
          <MidTitle>{linkText}</MidTitle>
        </Link>
      )}
       {link2 && (
        <Link href={link2} className={`underline ${bgColor === 'mint' ? 'text-white' : 'text-green-900'}`}>
          <MidTitle>{linkText2}</MidTitle>
        </Link>
      )}
     
    </div>
  );
}
