import Image from 'next/image';
import Link from 'next/link';
import { FieldType } from '../../Types';
import styles from './ToolCard.module.css';

interface ToolCardProps {
  tool: FieldType;
}

export const ToolCard = ({ tool }: ToolCardProps) => {
  const { title, description, thumbnail, link /* , category  */ } = tool;

  return (
    <div className={styles.tool__card}>
      <div>
        <Image
          alt={thumbnail.fields.title}
          src={`https:${thumbnail.fields.file.url}`}
          width={thumbnail.fields.file.details.image?.width}
          height={thumbnail.fields.file.details.image?.height}
        />
      </div>
      <div className={styles.tool__content}>
        <div className={styles.tool__info}>
          <h2 className={styles.tool__card__title}>{title}</h2>
          <p className={styles.tool__card__description}>{description}</p>
        </div>
        <div className={styles.tool__actions}>
          <Link href={link}>
            <a className={styles.tool__actions__link} target='_blank' rel='noopener'>
              Check this
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
