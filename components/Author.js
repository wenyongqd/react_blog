import {Avatar, Divider} from 'antd'
import '../static/style/components/author.css'

const Author = () => {
    return (
        <div className="author-div comm-box">
            <div>
                <Avatar size={100} src="/Users/hewenyong/IdeaProjects/react_blog/blog/static/fig/41549122155_ 2.pic.JPG" />
            </div>
            <div className="author-instruction">
            A fitness-loving programmer, focusing on web and mobile front-end development.
            <Divider>Social Media</Divider>
            <Avatar size={28} icon="github" className="account" />
            <Avatar size={28} icon="qq" className="account" />
            <Avatar size={28} icon="wechat" className="account" />
            </div>
        </div>
    )
}

export default Author