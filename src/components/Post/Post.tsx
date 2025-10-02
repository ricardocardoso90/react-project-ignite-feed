import styles from './Post.module.scss';
import { Avatar } from '../Avatar/Avatar';

import ptBR from 'date-fns/locale/pt-BR';
import { Comment } from '../Comment/Comment';

import { format, formatDistanceToNow } from 'date-fns';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { PostProps } from '../../Props/Props';

export function Post({ author, content, publishedAt }: PostProps) {
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  });

  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  const [comments, setComments] = useState([
    {
      author: {
        avatarUrl: "https://github.com/ricardocardoso90.png",
        name: 'Ricardo Cardoso',
        profession: 'Desenvolvedor Front-End',
        comment: 'Top demais meu amigo, parabéns!! 👏',
      },
      publishedAt: new Date('2023 04 04 21:08:00')
    }
  ]);

  const [newCommentText, setNewCommentText] = useState('');
  function handleCreateNewComment(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setComments([...comments,
    {
      author: {
        avatarUrl: "https://github.com/ricardocardoso90.png",
        name: 'Ricardo Cardoso',
        profession: 'Estudante',
        comment: newCommentText,
      },
      publishedAt: new Date()
    },
    ]);
    setNewCommentText('');
  };

  function deleteComment(commentToDelete: string) {
    const commentWithoutDeleteOne = comments.filter((item) => {
      return item.author.comment != commentToDelete;
    });
    setComments(commentWithoutDeleteOne);
  };

  function handleNewCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity('');
    setNewCommentText(e.target.value);
  };

  function handleNewCommentInvalid(e: InvalidEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity('Esse campo é obrigatório, digite algo:');
  };

  const isNewCommentEmpty = newCommentText.length <= 3;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar imgProps={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.profession}</span>
          </div>
        </div>
        <div>
          <time
            title={publishedDateFormatted}
            dateTime={publishedAt.toISOString()}>
            {publishedDateRelativeNow}
          </time>
        </div>
      </header>

      <div className={styles.content}>
        {content.map((item) => {
          if (item.type === 'salutation') {
            return (
              <p key={item.content}>{item.content}</p>
            );
          } else if (item.type === 'paragraph') {
            return (
              <p key={item.content}>{item.content}</p>
            );
          } else if (item.type === 'link') {
            return (
              <p key={item.content}><a href='#'>{item.content}</a></p>
            );
          }
        })}
      </div>

      <form
        className={styles.commentForm}
        onSubmit={handleCreateNewComment}
      >
        <strong>Deixe seu feedback</strong>
        <textarea
          required
          value={newCommentText}
          placeholder='Deixe um comentário'
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
        />

        <footer>
          <button
            type='submit'
            disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((item, index) => {
          return (
            <Comment
              key={index}
              author={item.author}
              publishedAt={item.publishedAt}
              deleteCommentProp={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
};