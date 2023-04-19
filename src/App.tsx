import './styles/_globals.scss';
import styles from './App.module.scss';

import { Post } from './components/Post/Post';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';

import { PostProps } from './Props/Props';

const posts: PostProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/ricardocardoso90.png",
      name: 'Ricardo Cardoso',
      profession: 'Programador'
    },
    content: [
      { type: 'salutation', content: 'Fala galeraaa... 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023 04 04 21:08:00')
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((item) => {
            return (
              <Post
                key={item.id}
                author={item.author}
                content={item.content}
                publishedAt={item.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
export default App;