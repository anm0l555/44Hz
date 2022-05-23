import React, { Component } from "react";
import "./index.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import AvatarDetails from "./details";
import {fetchData,addItems}  from "../actions/displayItems";
import {connect} from 'react-redux'

class Avatars extends Component {
    state={
        show:false
    }
  componentDidMount() {
    M.AutoInit();
    this.props.fetchData();
    console.log(this.props.items)
    setTimeout(()=>{
        this.setState({
            show:false
        })
    },[1000])
  }
    componentWillMount() {
        console.log(this.props.items)
    }
    //  displayItems = this.props?.items?.map((item) => (
    //   <div key={item.id}>
    //     <h3>{item.firstName}</h3>
    //     <p>{item.lastName}</p>
    //   </div>
    // ));
  render() {
    return (
      <div className="Avatars">
        <ul id="slide-out" class="sidenav">
          <li>
            <a
              href="#modal1"
              className="btn-floating btn-large waves-effect waves-light modal-trigger"
              onClick={()=>{
                  this.props.addItems(1)
              }}
            >
              FB
            </a>
          </li>
          <li>
            <a
              href="#!"
              className="btn-floating btn-large waves-effect waves-light"
            >
              FB
            </a>
          </li>
          {
              this.props.items.items?.length ? this.props.items.items.map((data)=>{
                  return (
                    <li>
                    <a
                      href="#modal1"
                      onClick={()=>{
                          this.props.addItems(data.id)
                          this.setState({show:true})
                    }}
                      className="btn-floating btn-large waves-effect waves-light"
                    >
                      {data?.firstName?.substring(0,1)}{data?.lastName?.substring(0,1)}
                    </a>
                  </li>   
                  )
              })
              :
              <p>loading</p>
          }
          
        </ul>
        <a
          href="#"
          data-target="slide-out"
          class="sidenav-trigger btn"
          id="sidebar-btn"
        >
          <i class="material-icons">menu</i>
          <br />
          <p className="black-text">Click to open Sidebar</p>
        </a>
        {/* {displayItems} */}
        <div id="modal1" class="modal">
          <div class="modal-content">
            <h4>Details</h4>
            <p><span className="avatar-left">A bunch of text:</span> {this.props.items.item && this.props.items?.item.firstName}</p>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">
              Close
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    items: state.items,
    item: state.item
  });
  

export default connect(mapStateToProps,{fetchData,addItems})(Avatars);
