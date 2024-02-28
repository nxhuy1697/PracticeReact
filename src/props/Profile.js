import React from "react";

function PostItem({ image, title, description, callback = () => {}}) {
    callback()
  return (
    <div>
      <img src={image} alt={title} />
      <h2 className="title">{title}</h2>
      <p className="content">{description}</p>
    </div>
  );
}

export default function Profile() {
  return (
    <div id="wrapper">
      <PostItem
        title="1tuong tac excel"
        image="https://thumbs.dreamstime.com/b/autumn-nature-landscape-colorful-forest-autumn-nature-landscape-colorful-forest-morning-sunlight-131400332.jpg"
        description="Mo ta ve component"
        callback = {() => {}}
      />
      <PostItem
        title="2 tuong tac excel"
        image="https://thumbs.dreamstime.com/b/autumn-nature-landscape-colorful-forest-autumn-nature-landscape-colorful-forest-morning-sunlight-131400332.jpg"
        description="Mo ta ve component"
      />
      <PostItem
        title="3 tuong tac excel"
        image="https://thumbs.dreamstime.com/b/autumn-nature-landscape-colorful-forest-autumn-nature-landscape-colorful-forest-morning-sunlight-131400332.jpg"
        description="Mo ta ve component"
      />
    </div>
  );
}
