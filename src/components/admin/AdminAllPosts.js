import React        from 'react';
import {withRouter} from 'react-router-dom';
import parseDate    from '../../logic/parseDate';

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

        this.state              = {sortBy: 'newOld', filterBy: 'blogs'};

        this.handleRadioChange  = this.handleRadioChange.bind(this);
        this.handleSort         = this.handleSort.bind(this);
    }
    handleRadioChange(e) {
        console.log(e);
        return;
    }
    handleSort(e) {
        console.log('sort', e);
        return;
    }
    render() {
        const {blogs, videos} = this.props;
        const {sortBy, filterBy} = this.state;

        let rows = <tr><td colSpan="2">No Data</td></tr>
        if (filterBy === 'blogs' && blogs && blogs.length) {
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
        }
        return (
            <AdminRight>
                <AdminTitle>Users</AdminTitle>
                <SortContainer>
                    <SortRadioContainer>
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
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                        <option value="old-new">Oldest to Newest</option>
                        <option value="new-old">Newest to Oldest</option>
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