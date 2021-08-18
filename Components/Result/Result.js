import "./Result.css";

const Result = (props) => {
  let data = props.data;

  return (
    <main className=" grid">
      {data.map((obj) => (
        <article className="card">
          <div className="movie-img">
            <img src={obj.img} alt="Images" />
          </div>
          <div className="movie-data">
            <h3 className="title">{obj.name}</h3>
            <p> Cast :{obj.description}</p>
            <a href="{obj.link}">Wath on Amazon</a>
          </div>
        </article>
      ))}
    </main>
  );
};
export default Result;
