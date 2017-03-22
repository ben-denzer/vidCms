import React                from 'react';
import {withRouter}         from 'react-router-dom';
import parseDate            from '../../logic/parseDate';
import filterPostsService   from '../../logic/filterPostsService';

import {
    AdminRight,
    AdminTable,
    AdminTitle,
    SortContainer,
    SortRadioContainer,
    TableCell,
    TableHeader,
    TableRow
} from '../../styles/adminTableStyles';

class AdminAllPosts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {sortBy: 'newOld', filterBy: 'all'};

        this.handleRadioChange  = this.handleRadioChange.bind(this);
        this.handleSort         = this.handleSort.bind(this);
    }
    handleRadioChange(e) {
        this.setState({filterBy: e.target.id});
    }
    handleSort(e) {
        this.setState({sortBy: e.target.id});
    }
    render() {
        const {blogs, videos} = this.props;
        const {sortBy, filterBy} = this.state;

        const filteredPosts = filterPostsService(blogs, videos, sortBy, filterBy);

        let rows = <tr><td colSpan="2">No Data</td></tr>

        if (filteredPosts && filteredPosts.length) {
            rows = filteredPosts.map(a => {
                const postType = a.blog_id ? 'blog' : 'video';
                return (
                    <TableRow
                        key={a.blog_id || a.video_id}
                        onClick={() => this.props.push(`/admin/edit/${postType}/${a.blog_id}`)}
                    >
                        <TableCell>{parseDate(a.blog_date || a.video_date)}</TableCell>
                        <TableCell>{a.blog_title || a.video_title}</TableCell>
                    </TableRow>
                );
            });
        };



        /*if (filterBy === 'blogs' && blogs && blogs.length) {
            rows = blogs.map(a => {
                return (
                    <TableRow
                        key={a.blog_id}
                        onClick={() => this.props.push(`/admin/edit/blog/${a.blog_id}`)}
                    >
                        <TableCell>{parseDate(a.blog_date)}</TableCell>
                        <TableCell>{a.blog_title}</TableCell>
                    </TableRow>
                );
            });
        }*/
        return (
            <AdminRight>
                <AdminTitle>Posts</AdminTitle>
                <SortContainer>
                    <SortRadioContainer>
                        <label>
                            <input
                                type="radio"
                                id="all"
                                checked={filterBy === 'all'}
                                onChange={this.handleRadioChange}
                            />
                            All Posts
                        </label>
                        <label>
                            <input
                                type="radio"
                                id="blogs"
                                checked={filterBy === 'blogs'}
                                onChange={this.handleRadioChange}
                            />
                            Blogs
                        </label>
                        <label>
                            <input
                                type="radio"
                                id="videos"
                                checked={filterBy === 'videos'}
                                onChange={this.handleRadioChange}
                            />
                            Videos
                        </label>
                    </SortRadioContainer>
                    <select id="user-sort" className="admin-sort" value={sortBy} onChange={this.handleSort}>
                        <option value="postsAZ">A-Z</option>
                        <option value="postsZA">Z-A</option>
                        <option value="oldNew">Oldest to Newest</option>
                        <option value="newOld">Newest to Oldest</option>
                    </select>
                </SortContainer>
                <AdminTable>
                    <thead>
                        <tr>
                            <TableHeader>Date</TableHeader>
                            <TableHeader>Title</TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </AdminTable>
            </AdminRight>
        );
    }
};

export default withRouter(AdminAllPosts);
