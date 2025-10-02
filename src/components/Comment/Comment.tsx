import { useState } from "react";
import styles from "./Comment.module.scss";

import { Avatar } from "../Avatar/Avatar";
import { ThumbsUp, Trash } from "phosphor-react";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { CommentProps } from "../../Props/Props";

export function Comment({
  author,
  publishedAt,
  deleteCommentProp,
}: CommentProps) {
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const [likeCount, setLikeCount] = useState(0);
  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  };

  function handleDeleteComment() {
    deleteCommentProp(author.comment);
  };

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} imgProps={author.avatarUrl} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.name}</strong>
              <time
                title={publishedDateFormatted}
                dateTime={publishedAt.toISOString()}
              >
                {publishedDateRelativeNow}
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{author.comment}</p>
        </div>
        <footer>
          <button
            onClick={handleLikeComment}
            style={{ color: likeCount ? "#00b37e" : "" }}
          >
            <ThumbsUp />
            Curtir <span>{likeCount >= 1 ? 1 : likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
