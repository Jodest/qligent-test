import React from 'react';
import {connect} from 'react-redux';

// import { deletePost, hideModal } from '../actions'

const DeletePostModal = ({ post, dispatch }) => {
  return (
    <div>
      {/* <p>Delete post {post.name}?</p>
      <button onClick={() => {
        dispatch(deletePost(post.id)).then(() => {
          dispatch(hideModal())
        })
      }}>
        Yes
      </button>
      <button onClick={() => dispatch(hideModal())}>
        Nope
      </button> */}
    </div>
  )
};

const mapStateToProps = () => ({
});

export default connect(mapStateToProps, null)(DeletePostModal)