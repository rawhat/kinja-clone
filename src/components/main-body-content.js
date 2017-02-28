import React from 'react';

const MainBody = () => {
    let mockData = [
        {
            id: 0,
            sharedFrom: 'Deadspin',
            title: 'Mikael Granlund Beats All The Kings For Beautiful OT Winner',
            author: 'Billy Haisley',
            postedAt: Date.now() - 17000,
            contentType: 'image',
            contentUrl: 'http://i.imgur.com/VSnfDuz.jpg',
            textIntro: 'There were a whole lot of storylines heading into Monday’s clash between the West-leading Wild and the just-outside-the-playoff-picture Kings. The day before, both teams had recruited reinforcements for their respective postseason pushes: L.A. with a surprise trade for goalie Ben Bishop, and Minnesota acquiring Martin…',
            recommendations: 8,
            comments: 30
        },
        {
            id: 1,
            sharedFrom: 'Deadspin',
            title: 'As Expected, The New Vikings Stadium Is Killing A Record Number Of Birds',
            author: 'Barry Petchesky',
            postedAt: Date.now() - (1000 * 60 * 60 * 2),
            contentType: 'image',
            contentUrl: 'http://i.imgur.com/VSnfDuz.jpg',
            textIntro: 'No one can say they didn’t see this coming. Well, the birds can.',
            recommendations: 4,
            comments: 13
        }
    ];

    return (
        <div className='main-body-content'>
            {mockData.map(story => {
                let mediaTag = null;
                switch(story.contentType) {
                    case 'image': {
                        mediaTag = <img src={story.contentUrl} />;
                        break;
                    }
                    case 'video': {
                        break;
                    }
                }

                return <div className='content-area'> 
                    <div className='content-section' key={story.id}>
                        {story.sharedFrom ? <div className='shared-from'>
                            <i className="material-icons md-dark">sync</i>
                            <span>Shared from {story.sharedFrom}</span>
                        </div> : null}
                        <h4>{story.title}</h4>
                        <div>
                            <h6 style={{ display: 'inline-block' }}>{story.author}</h6>
                            {' - '}
                            <h6 style={{ display: 'inline-block' }}><small>{new Date(story.postedAt).toLocaleString()}</small></h6>
                        </div>
                        {mediaTag}
                        <p>{story.textIntro}</p>
                    </div>
                    <div className='content-sidebar'>
                        <div className='icon'>
                            <i className="material-icons md-dark" style={{ width: 36, fontSize: '36px'}}>star rate</i>
                        </div>
                        <span className='icon-text'>{story.recommendations}</span>
                        <div className='icon'>
                            <i className="material-icons md-dark" style={{ width: 36, fontSize: '36px'}}>chat bubble outline</i>
                        </div>
                        <span className='icon-text'>{story.comments}</span>
                        <div className='icon'>
                            <i className="material-icons md-dark" style={{ width: 36, fontSize: '36px'}}>more vert</i>
                        </div>
                    </div>
                </div>;
            })}
        </div>
    );
};

export default MainBody;