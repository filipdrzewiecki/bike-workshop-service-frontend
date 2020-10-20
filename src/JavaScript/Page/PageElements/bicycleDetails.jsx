import './bicycleDetails.css';
import '../../Css/dropdownMenu.css';
import React from 'react';
import IconGoBack from '../../../resources/icon/go-back.png';
import { Link } from "react-router-dom";
import DeleteIcon from "../../../resources/icon/page/delete.svg";
import EditIcon from "../../../resources/icon/page/edit.svg";
import DropdownIcon from "../../../resources/icon/page/dots.svg";
import { getUserName } from '../Security/authHeader';
import { MapType } from '../../Content/Garage/getBicycle';

export default class BicycleDetails extends React.Component {

    renderDropdownMenu() {
        if (!this.props.bicycle) {
            return <div>Loading...</div>
        }
        return (
            <div className="dropdown">
                <div className="dropbtn"><img src={DropdownIcon} alt="delete" ></img></div>
                <div className="dropdown-content">
                    <div><img src={DropdownIcon} alt="dots" ></img></div>
                    <li><Link to={`/${getUserName()}/garage/${this.props.bicycle.name}/edit`}><img src={EditIcon} alt="edit" ></img></Link></li>
                    <li><Link to={`/${getUserName()}/garage/${this.props.bicycle.name}/delete`}><img src={DeleteIcon} alt="delete" ></img></Link></li>
                </div>
            </div>
        );
    }

    RenderGoBack() {
        if (this.props.backButtonLink != null) {
            return (
                <div className="go-back-button">
                    <Link to={this.props.backButtonLink}><img src={IconGoBack} alt="GoBack" ></img></Link>
                </div>
            );
        }
        return null;
    }

    RenderTitle() {
        return (
            <div className="empty-container">
                <div className="page-title">
                    <div className="primary">{this.props.title}
                        {this.renderDropdownMenu()}
                    </div>
                    <div className="secondary">{this.props.secondaryTitle}</div>
                </div>
            </div>
        );
    }

    renderPart(part, partName) {
        if (part) {
            return <Link to={`/${getUserName()}/garage/${this.props.bicycle.name}/${partName}`}> {part.brand} </Link>;
        }
        return <Link to={`/${getUserName()}/garage/${this.props.bicycle.name}/${partName}/add`}>dodaj +</Link>
    }

    render() {
        return (
            <div className="page">
                <div className="page-title-container">
                    {this.RenderTitle()}
                    {this.RenderGoBack()}
                </div>
                <div className="pageContent">
                    <div className="contentNames">
                        <div>Typ:  </div>
                        <div>Waga: </div>
                        <div>Rama: </div>
                        <div>Widelec: </div>
                    </div>
                    <div className="contentValues">
                        <div><MapType type={this.props.bicycle.type}/></div>
                        <div>{this.props.bicycle.predefinedWeight}</div>
                        <div>{this.renderPart(this.props.bicycle.frame, 'frame')}</div>
                        <div>{this.renderPart(this.props.bicycle.fork, 'fork')}</div>
                    </div>
                </div>
            </div>
        );
    }
}