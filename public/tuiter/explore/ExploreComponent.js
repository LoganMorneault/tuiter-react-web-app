import PostSummaryList from "../explore/PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
    <div class="row">
        <div class="col input-group">
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </span>
                <input type="text" class="form-control" placeholder="Search Tuiter" aria-label="Username" aria-describedby="basic-addon1">
            </div>
        </div>
        <div class="col-1">
            <i class="fa fa-cog fa-2x wd-blue"></i>
        </div>
    </div>
    <ul class="nav mb-2 nav-tabs">
        <li class="nav-item">
           <a class="nav-link active" href="for-you.html">For You</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="trending.html">Trending</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="news.html">News</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="sports.html">Sports</a>
        </li>
        <li class="nav-item d-sm-none">
            <a class="nav-link" href="entertainment.html">Entertainment</a>
        </li>
    </ul>
    <div class="row mt-2 position-relative">
        <img style="width:100%" src="https://geekerhertz.com/images/5f3ce6658154d.jpg">
        <p class="wd-image-text 
            position-absolute">SpaceX's Starship</p>
    </div>
    ${PostSummaryList()}
    `);
}
export default ExploreComponent;
