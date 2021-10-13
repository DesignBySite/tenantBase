import React from "react";

const Items = ({ items = [] }) => {

  console.log(typeof items)
  const mapItems = items.map(item => {
      let timestamp = item.dateCreated.split(' ')[1];
      return <div className="item">
        <div className="item-author-and-poll">
          <div>
            <h3 className="item-title">{item.title}</h3>
            <p>by {item.userName} at {timestamp}</p>
          </div>
          <div className="polling">
            <p>{item.numViews} views</p>
            <p>{item.numVotes === 1 ? `${item.numVotes} vote` : `${item.numVotes} votes`}</p>
          </div>
        </div>
        <img className="item-image" src={item.imageUrl} alt={item.title}/>
      </div>
    })

  return (
    <>
    {mapItems}
    </>
  );
}

export default Items