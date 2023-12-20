
import Conrtol from '../../components/Common/control/control';
import GetStarted from '../../components/Common/get-started/get-started';

import BlogList from '../../components/blog-list';

import './blog.css';

const Blog = () => {
  
    return (
        <div className='blog'>
            <div className='blog-title'>
                Content Sources
            </div>
            <div className='blog-subtitle'>
                Connect these sources to your Marico homepage.
            </div>
            <BlogList />
            <Conrtol />
            <GetStarted />

        </div>
       
    )
}
export default Blog;