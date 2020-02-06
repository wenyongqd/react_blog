import {Avatar, Divider} from 'antd'
import '../static/style/components/author.css'

const Author = () => {
    return (
        <div className="author-div comm-box">
            <div>
                <Avatar size={100} src="https://avatars0.githubusercontent.com/u/46271263?s=460&v=4" />
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