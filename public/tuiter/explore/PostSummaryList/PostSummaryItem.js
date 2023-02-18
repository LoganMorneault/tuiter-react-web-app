const PostSummaryItem = (post) => {
    return (`
    <li class="list-group-item">
        <div class="row">
            <div class="d-flex flex-row justify-content-between">
                <div>
                    <p class="wd-suggested-small-text mb-0">${post.topic}</p>
                    <div>
                        <p class="wd-suggested-username-text mb-1">
                        ${post.userName} <i class="fa fa-circle"></i>
                            <span class="wd-suggested-time-text">
                            - ${post.time}
                            </span>
                        </p>
                    </div>
                    <p class="wd-suggested-title-text me-2 mt-0 font-weight-normal">${post.title}</p>
                </div>
                <div>
                    <img class="wd-suggested-image align-self-end"
                        src="${post.image}">
                </div>
            </div>
        </div>
    </li>`
    );
}
export default PostSummaryItem;