import React from 'react';
import { Card, CardBody, CardContent, CardMedia, CardHeadline2 } from '@sberdevices/plasma-ui';
import { useHistory } from 'react-router-dom';
import styles from "./styles.module.scss";
export type SongCardProps = Readonly<{
  imageSrc: string;
  title: string;
  focused: boolean;
  id: string;
  index: number;
  onSongChoose: Function;
}>;

const SongCard = (props: SongCardProps) => {
  const { imageSrc, title, focused, id, index, onSongChoose } = props;
  const history = useHistory();
  const clickHandler = () => {
    history.push(`/song/${id}`);
    onSongChoose();
  }
  return (
      <Card focused={focused} className={styles.song_card} scaleOnFocus onClick={clickHandler}>
        <CardBody>
          <CardMedia src={imageSrc} alt={title} ratio="1/1" />
          <CardContent>
            <CardHeadline2>
              {index}.&nbsp;
              {title}
            </CardHeadline2>
          </CardContent>
        </CardBody>
      </Card>
  );
};

SongCard.defaultProps = {

};

export default SongCard;