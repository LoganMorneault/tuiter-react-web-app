const WhoToFollowListItem = (who) => {
    return (`
    <li class="list-group-item">
        <div class="row flex-row d-flex position-relative align-items-stretch">

            <div class="col-2 float-left">
                <img class="wd-profile-image ps-0 pe-0"
                    src="../../images/${who.avatarIcon}">
            </div>

            <div class="col ps-2 pt-2 mt-1 text-nowrap text-truncate">
                <p class="wd-suggested-large-text">${who.userName}</p>
                <p class="wd-suggested-small-text mt-2">@${who.handle}</p>
            </div>

            <div class="col-3 right me-0 pe-0">
                <button class="btn btn-primary wd-tuit-button">Follow</button>
            </div>
            
        </div>
    </li>`
    );
}
export default WhoToFollowListItem;