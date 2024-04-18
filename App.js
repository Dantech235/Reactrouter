import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import NewPost from "./NewPost";
import { Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      detetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem Ipsum dolor sit amet consectetur adipisicing elit. Quis compacito",
    },
    {
      id: 2,
      title: "My 2nd Post",
      detetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem Ipsum dolor sit amet consectetur adipisicing elit. Quis compacito",
    },

    {
      id: 3,
      title: "My 3rd Post",
      detetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem Ipsum dolor sit amet consectetur adipisicing elit. Quis compacito",
    },
    {
      id: 4,
      title: "My 3rd Post",
      detetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem Ipsum dolor sit amet consectetur adipisicing elit. Quis compacito",
    },
  ]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const history = useHistory();

  const handleDelete = (id) => {
    const postsList = posts.filter((post) => post.id !== id);
  };

  return (
    <div className="App">
      <Header title="React Js Blog" />
      <Nav search={search} setSearch={setSearch} />
      <Switch>
        <Route exact path="/">
          <Home posts={posts} />
        </Route>
        <Route exact path="/post">
          <NewPost />
        </Route>
        <Route path="/post/:id">
          <PostPage posts={posts} handleDelete={handleDelete} />
        </Route>
        <Route path="/about" Component={About} />
        <Route path="*" Component={Missing} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
