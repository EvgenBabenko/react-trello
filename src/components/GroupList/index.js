import React, { Component } from 'react'
import { connect } from 'react-redux'
import Sortable from 'sortablejs';

import GroupList from './GroupList'
import { activeActions } from '../../modules/active'

class GroupListWrapper extends Component {
    state = {
        isAddGroup: false
    }

    handleAddGroup = () => {
        if (!this.props.user || this.props.hasActive) return;

        this.setState({ isAddGroup: true })

        this.props.toggleActive();
    };

    handleCancelAddGroup = () => {

        this.setState({ isAddGroup: false })
        
        this.props.toggleActive();
    };

    sortableContainersDecorator = (componentBackingInstance) => {
        // check if backing instance not null
        if (componentBackingInstance) {
            let options = {
                animation: 150, // ms, animation speed moving items when sorting, `0` — without animation
                handle: ".title", // Restricts sort start click/touch to the specified element
                // onUpdate: function (evt/**Event*/){
                //     var item = evt.item; // the current dragged HTMLElement
                // }
            };
            Sortable.create(componentBackingInstance, options);
        }
    };

    sortableGroupDecorator = (componentBackingInstance) => {
        // check if backing instance not null
        if (componentBackingInstance) {
            let options = {
                animation: 150, // ms, animation speed moving items when sorting, `0` — without animation
                draggable: ".tasks__item", // Specifies which items inside the element should be sortable
                group: "shared",
                // onUpdate: function (evt/**Event*/){
                //     var item = evt.item; // the current dragged HTMLElement
                // }
            };
            Sortable.create(componentBackingInstance, options);
        }
    };

    render() {
        return (
            <GroupList
                handleAddGroup={this.handleAddGroup}
                handleCancelAddGroup={this.handleCancelAddGroup}
                sortableContainersDecorator={this.sortableContainersDecorator}
                sortableGroupDecorator={this.sortableGroupDecorator}
                {...this.props}
                {...this.state}
            />
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    data: state.dashboard.groups,
    hasActive: state.hasActive
})

const mapDispatchToProps = dispatch => ({
    toggleActive: () => dispatch(activeActions.toggleActive()),
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupListWrapper)