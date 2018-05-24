import React, {Component} from "react";
import ProductComponent from './ProductComponent';
import CardItemsComponent from './CardItemsComponent'


export default class HomeComponent extends Component {

    render() {

        return(
            <div className="row">
                <div className="col-sm-6">
                   <ProductComponent />
                </div>
                <div className="col-sm-6 well">
                   <CardItemsComponent />
                </div>
            </div>
        )
    }
}