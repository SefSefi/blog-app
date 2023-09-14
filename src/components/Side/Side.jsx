import "./Side.css";

function Side() {
  return (
    <div className="side-text">
      <h2 className="header-side-text">Latest</h2>
      <p className="uper-side-text">
        Blog post #1 <a href="/post/1">go to page</a>
        <br />
        <br />
        Blog post #2 <a href="/post/2">go to page</a>
        <br />
        <br />
        Blog post #3 <a href="/post/3">go to page</a>
      </p>
      <h2 className="header-side-text">Popular</h2>
      <p className="botom-side-text">
        Blog post #3 <a href="/post/3">go to page</a>
        <br />
        <br />
        Blog post #1 <a href="/post/1">go to page</a>
        <br />
        <br />
        Blog post #2 <a href="/post/2">go to page</a>
      </p>
    </div>
  );
}

export default Side;
