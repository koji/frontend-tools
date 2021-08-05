import Link from "next/link";
import Image from "next/image";
import styles from "./ToolCard.module.css";

export const ToolCard = ({ tool }) => {
  // title: string;
  // description: string
  // thumbnail: { fields: { file: string, title: string) }
  // link: string
  // category: string[]
  const { title, description, thumbnail, link, category } = tool;
  return (
    <div className={styles.tool__card}>
      <div>
        <Image
          alt={thumbnail.fields.file.title}
          src={`https:${thumbnail.fields.file.url}`}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </div>
      <div className={styles.tool__content}>
        <div className={styles.tool__info}>
          <h4 className={styles.tool__card__title}>{title}</h4>
          <p className={styles.tool__card__description}>{description}</p>
        </div>
        <div className={styles.tool__actions}>
          <Link href={link}>
            <a className={styles.tool__actions__link}>Check this</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
