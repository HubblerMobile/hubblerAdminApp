import React, { Component } from 'react';
import { Checkbox, Select } from 'antd';
import './allUserSelect.scss'
import UserSearch from '../common/UserSearch/userSearch'


class AllUserSelect extends Component {





    render() {
        const { allHeadingsData, userData, searchFirstButtonName, searchSecondButtonName, searchPlaceHolder, searchFirstButtonLoader,
            searchSecondButtonLoader, searchLoader, onSearch } = this.props

        const perPageOptions = [10, 20, 30, 40, 50]
        return (
            <div className="allUserSelect_main">
                <div className="allUserSelect_container">
                    <UserSearch fristButtonName={searchFirstButtonName} secondButtonName={searchSecondButtonName} searchPlaceHolder={searchPlaceHolder}
                        fristButtonLoader={searchFirstButtonLoader} secondButtonLoader={searchSecondButtonLoader} searchLoader={searchLoader} onSearch={onSearch} />

                    <div className="all_user_details" >
                        <div className="upper_heading_details">
                            <div className="upper_checkbox">
                                <Checkbox value="A" />
                            </div>

                            <div className="all_headings" style={{ "grid-template-columns": `repeat(${allHeadingsData.length}, calc(100%/${allHeadingsData.length}))` }}>
                                {allHeadingsData.map(data => (<div key={data._id}>{data.lbl}</div>))}
                            </div>

                            <div className="column_settings">
                                <img src={require('../../images/svg/settings_grey.svg')} />
                            </div>
                        </div>
                        <div className="lower_user_details">
                            <div className="lower_user_details_container">
                                <Checkbox.Group >

                                    {userData.map(user => (
                                        <div className="user_details_container">
                                            <div className="lower_checkbox">
                                                <Checkbox value={user._id} />
                                            </div>
                                            <div className="single_user_details" style={{ "grid-template-columns": `repeat(${allHeadingsData.length}, calc(100%/${allHeadingsData.length}))` }}>
                                                {allHeadingsData.map(columnData => (<div>{user[columnData._id] || "--"}</div>))}
                                            </div>
                                        </div>

                                    ))}
                                </Checkbox.Group>
                            </div>
                        </div>
                    </div>

                    <div className="total_users">
                        <div className="total_users_container">
                            <div className="total_users_count">
                                <p>Total Users: 5632</p>
                            </div>
                            <div className="pagination">
                                <div className="rows_per_page">
                                    <p>Rows per page :</p>

                                    <Select defaultValue={10} style={{ width: 60 }} loading={false}>
                                        {perPageOptions.map(data => (<Select.Option value={data}>{data}</Select.Option>))}
                                    </Select>
                                </div>
                                <div className="page_no">
                                    <div className="current_page">1 of 10</div>
                                    <div className="change_page"><span className="prev_page">&lt;</span>  <span className="next_page">&gt;</span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}



export default AllUserSelect