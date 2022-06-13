import { NewsCardTS } from "../../types";
import { Card, Text, Link as UILink } from "@nextui-org/react";
import Style from "./NewsCard.module.css";
import Link from "next/link"

interface Props extends NewsCardTS {}

export default function NewsCard({
  title,
  description,
  content,
  url,
  image,
  publishedAt,
  source,
}: Props): JSX.Element {
  return (
    <>
    <Link href={url}>

      <div className={Style.compContainer}>
        <Card isPressable isHoverable>
            <div className={Style.cardLayout}>

          <Card.Header>
              <Text b h3 blockquote>
                {title}
              </Text>
            
          </Card.Header>
            <Card.Divider/>
            <Card.Image src={image} width="90%" />
          <Card.Body>
            
              <Text h4>{content}</Text>
              <UILink href={source.url}>{"From "+source.name}</UILink>
            
          </Card.Body>
            </div>
        </Card>
      </div>
    </Link>
    </>
  );
}
