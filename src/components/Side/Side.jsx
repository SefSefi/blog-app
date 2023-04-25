import './Side.css';

function Side() {
    return (
        <div className = "side-text">
              <h1 className = "header-side-text">Latest</h1>
              <p className = "uper-side-text">Blog post #1 <a href="url">go to page</a><br/><br/>
                Blog post #2 <a href="url">go to page</a><br/><br/>
                Blog post #3 <a href="url">go to page</a>
              </p>
              <h1 className = "header-side-text">Popular</h1>
              <p className = "botom-side-text">Blog post #3 <a href="url">go to page</a><br/><br/>
                Blog post #1 <a href="url">go to page</a><br/><br/>
                Blog post #2 <a href="url">go to page</a></p>   
          </div>
    )
}

export default Side;