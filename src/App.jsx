import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Body from "./components/body";

export function filterSearch(text, updateFilteredArticles){
        if (text){
        newArticles=[]
        console.log("searching for articles relating to: "+text)
        articles.forEach((article)=>{
            if (article.title.toLowerCase().includes(text.toLowerCase())){
            newArticles.push(article)}
        })
        }
        else{newArticles=articles}
        updateFilteredArticles(newArticles)
    }

function App() {
    const [filteredArticles, setFilteredArticles] = useState(articles);
    const updateFilteredArticles = (newArticles) => {
    setFilteredArticles(newArticles); // Update the state with the newArticles data
  };

  return (
    <div className="App">
      <Header articles={articles} filterSearch={(text) => filterSearch(text, updateFilteredArticles)}/>
      <Body articles={filteredArticles}/>
    </div>
  );
}

const articles = [
  {id: 1,title: "Why scientists are advising against this common fruit",author: "James Arthur", image:"https://th.bing.com/th/id/R.0b6317b5133b0e9dff1ed2f66022df3d?rik=4oQLvOg7QlvzLQ&pid=ImgRaw&r=0",date: "May 15, 2023",likes: 15,dislikes: 6},
  {id: 2,title: "The impact of climate change on global agriculture",author: "Emily Thompson",image:"https://th.bing.com/th/id/R.5a96fc44da3dadfff77222958a779fbb?rik=ClTY35EuWaRc5Q&pid=ImgRaw&r=0",date: "June 2, 2023",likes: 20,dislikes: 3},
  {id: 3,title: "Exploring the benefits of meditation for mental well-being",author: "Sarah Johnson",image:"https://th.bing.com/th/id/R.9e301149f4a53615233845df89322079?rik=t%2bzsLEBcNSfkwg&riu=http%3a%2f%2faboutmeditation.com%2fwp-content%2fuploads%2f2014%2f06%2fMeditation-ebooks-woman-meditating-peacefully.jpg&ehk=Z%2brBAsFDIEV9GEQy3LJQ1Rl99yklzA2WskGkOCdmWc4%3d&risl=&pid=ImgRaw&r=0",date: "June 8, 2023",likes: 10,dislikes: 2
  },{id: 4,title: "The future of renewable energy: Trends and advancements",author: "Michael Anderson",image:"https://th.bing.com/th/id/R.97d4ae6634f797a231604534fb4ac051?rik=gaEMX2%2bNBKVfMQ&pid=ImgRaw&r=0&sres=1&sresct=1",date: "June 10, 2023",likes: 12,dislikes: 1},
  {id: 5,title: "Unveiling the mysteries of deep-sea creatures",author: "Jennifer Lee",image:"https://th.bing.com/th/id/R.72a7f395fe90c498cd93020fcaaf0e99?rik=PwaLf%2bUfnTzfSQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-dFc1sALECiE%2fTj0DhmKvhQI%2fAAAAAAAAATo%2fAXviI4Q0ZOc%2fs1600%2fAngler_fish.jpg&ehk=jx5dmk%2fCwkkzz%2fctKOm6PppKXvW2nSMQWQ993pIw9FQ%3d&risl=&pid=ImgRaw&r=0",date: "June 16, 2023",likes: 18,dislikes: 4},
  {id: 6,title: "The role of AI in revolutionizing healthcare",author: "David Chen",image:"https://images.squarespace-cdn.com/content/v1/5583024ce4b02143d66d9594/1563908727911-LOX25Q9RJO94DN8LWTH7/ke17ZwdGBToddI8pDm48kBF5TQekzZEpQg7uomf0YZx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UVyOTFPrQTtpBzAcU-ytni6qrTZwh7dr1iuhQlzKpPq4AXDO04OIHuYhAboPQq4cAQ/image-asset.jpeg",date: "June 18, 2023",likes: 14,dislikes: 2
  },{id: 7,title: "The impact of social media on society: Pros and cons",author: "Sophia Roberts",image:"https://th.bing.com/th/id/R.d08b77204ec2e81e897b2bd8e4028ffe?rik=mF2Rt%2fS52YPqKA&pid=ImgRaw&r=0",date: "June 20, 2023",likes: 25,dislikes: 7},
  {id: 8,title: "The wonders of the universe: Exploring outer space",author: "John Reynolds",image:"https://th.bing.com/th/id/R.d09f39f7149551d4fc295889f607ab3b?rik=ruPTUKXJv%2b9ufQ&pid=ImgRaw&r=0",date: "June 23, 2023",likes: 9,dislikes: 3},
  {id: 9,title: "The art of storytelling: Engaging and captivating audiences",author: "Emma Watson",image:"https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1492176521/articles/2015/09/24/the-lifesaving-power-of-storytelling/150923-gelb-telling-stories-tease_y9xxro",date: "June 26, 2023",likes: 16,dislikes: 2}
];
let newArticles=articles;
export default App;
