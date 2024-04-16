import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find <span className="title1">Real Estate </span>& Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            distinctio beatae tempore itaque, repellat, harum ducimus nesciunt
            deserunt hic, accusantium officia. Earum incidunt mollitia in
            perspiciatis doloremque quia provident nobis?
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>+17</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>400</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1400</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.avif" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
